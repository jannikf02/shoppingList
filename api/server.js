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
port = 3070;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/usl/dist'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://usl:DasistkeingutesPasswort@10.0.0.203:27017/sessionStore?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
  })
}));

/*
app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});


app.get("/setCookie", (req, res) => {
  res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
  res.send('cookie set');
})

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});
*/
app.listen(port, async () => {
  console.log(`Server listening on the port::${port}`);
});

app.post("/api/registerUser", async (req, res) => {
  const usrPswdInpt = req.body.usrPswdInpt;
  const email = req.body.email;
  const result = await mongo.get("user", { email });
  if (result.length != 0) {
    const isPswdCorrect = await bcrypt.compare(usrPswdInpt, result[0].passwordHash);
    if (!isPswdCorrect)
      return res.json({ error: true, msg: 'The password you entered is incorrect' });
    return login(req, res, email, result[0]._id);
  }

  var passwordHash = await hashPassword(usrPswdInpt);
  const result_insert = await mongo.insert("user", { passwordHash, email });
  hash = undefined;
  return login(req, res, email, result_insert.insertedIds[0]);
})

app.get("/api/isLoggedin", async (req, res) => {
  res.json({ error: false, loggedin: req.session.uid != undefined });
})

app.get("/api/loggout", (req, res) => {
  req.session.destroy();
  res.send("loggedout")
})

async function hashPassword(usrPswdInpt) {
  return await bcrypt.hash(usrPswdInpt, await bcrypt.genSalt(10));
}

async function login(req, res, email, uID) {
  req.session.email = email;
  req.session.uid = uID;
  res.json({ error: false, msg: "", loggedin: true })
}

app.get("/test", (req, res) => {
  req.session.test = true;
  res.json(req.session + "");
})
app.get("/test2", (req, res) => {

  res.json(req.session.test);
})