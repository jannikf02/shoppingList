const mongo = require("./mongoConnection");
const bcrypt = require('bcrypt');

const express = require("express");
const cookieParser = require("cookie-parser");

const mongodb = require("mongodb");

const randomId = require('random-id');
const { json } = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const fs = require("fs");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

const app = express(),
  bodyParser = require("body-parser");
port = process.env.PORT;

const mongoStore = MongoStore.create({
  mongoUrl: process.env.SESSION_STORE_STRING,
});

const session_options = {
  secret: process.env.SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  store: mongoStore
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/usl/dist'));
app.use(session(session_options));

app.listen(port, async () => {
  console.log(`API started. Listening for API Requests on Port ${port}`);
});

/*
  This section is for the user login and registration routes
*/
app.post("/api/registerUser", async (req, res) => {
  const usrPswdInpt = req.body.usrPswdInpt;
  const email = req.body.email;
  const result = await getUserFromEmail(email);
  if (result.length != 0) {
    const isPswdCorrect = await checkPassword(usrPswdInpt, result);
    if (!isPswdCorrect) {
      return jsonResult(res, true, 'The password you entered is incorrect', false, false);
    }
    return login(req, res, email, result[0]._id);
  }

  var passwordHash = await hashPassword(usrPswdInpt);
  const result_insert = await createUser(passwordHash, email);
  return login(req, res, email, result_insert.insertedIds[0]);
})

app.get("/api/isLoggedin", async (req, res) => {
  jsonResult(res, false, "", req.session.uid != undefined, false);
})

app.get("/api/loggout", (req, res) => {
  req.session.destroy();
  jsonResult(res, false, "", false, true);
})

function createUser(passwordHash, email) {
  return mongo.insert("user", { passwordHash, email });
}

async function getUserFromEmail(email) {
  return await mongo.get("user", { email });
}

async function checkPassword(usrPswdInpt, result) {
  return await bcrypt.compare(usrPswdInpt, result[0].passwordHash);
}

async function hashPassword(usrPswdInpt) {
  return await bcrypt.hash(usrPswdInpt, await bcrypt.genSalt(10));
}

function login(req, res, email, uID) {
  req.session.email = email;
  req.session.uid = uID;
  res.json({ error: false, msg: "", loggedin: true })
}

function jsonResult(res, error, msg, loggedin, loggedout) {
  res.json({ error, msg, loggedin, loggedout })
}

/*
  This section is for the shopping list routes
*/

app.get("/api/usl/list", (req, res) => {
  mongo.get("list", { ownerMail: req.body.mail }).then(result => {
    res.json(result.list);
  })
});

app.post("/api/usl/list", (req, res) => {
  const list = req.body.list;

  const result = mongo.get("list", { ownerMail: list.ownerMail });
  if (result.length == 0) {
    mongo.insert("list", list);
    return resultJson(false, "List created", true, false);
  }
  mongo.update("list", { ownerMail: list.ownerMail }, { list });
});

