const mongo = require("./mongoConnection");
const bcrypt = require('bcrypt');

const express = require("express");
const cookieParser = require("cookie-parser");

const mongodb = require("mongodb");

const randomId = require('random-id');
const { json } = require("express");
const app = express(),
bodyParser = require("body-parser");
port = 3070;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/usl/dist'));

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

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

app.post("/api/registerUser", async(req, res) => {
  const usrPswdInpt = req.body.usrPswdInpt;
  const email = req.body.email;
  const result = await mongo.get("user",{email});
  if(result.length != 0){
    const isPswdCorrect = await bcrypt.compare(usrPswdInpt,result[0].passwordHash);
    if(!isPswdCorrect)
      return res.json({error:true,msg:'The password you entered is incorrect'});
    return login(res,email);
  }

  var passwordHash = await hashPassword(usrPswdInpt);
  mongo.insert("user",{passwordHash,email});
  hash = undefined;
  return login(res,email);
})

app.get("/api/isLoggedin",async (req,res)=>{
  let token = req.cookies.sessionTokenToken;
  let email = req.cookies.sessionTokenEmail;
  if(token != undefined && email != undefined){
    const data = await mongo.get("user",{email,token});
    if( data.length > 0 ){
      return res.json({error:false,loggedin:true});
    }
  }
  res.json({error:false,loggedin:false});
})

app.get("/api/loggout",(req,res)=>{
  res.cookie("sessionTokenEmail",0,{maxAge:0})
  res.json("loggedout")
})

async function hashPassword(usrPswdInpt) {
  return await bcrypt.hash(usrPswdInpt, await bcrypt.genSalt(10));
}

async function login(res,email){
  let token = createSessionToken();
  res.cookie('sessionTokenEmail', email, { maxAge: 999999999, httpOnly: true });
  res.cookie('sessionTokenToken', token, { maxAge: 999999999, httpOnly: true });
  mongo.update("user",{email},{token});
  res.json({error:false,msg:"",loggedin:true})
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&()?/#+-.,;:_<>|';

function createSessionToken(){
  let result = '$32$ses_';
    const charactersLength = characters.length;
    for ( let i = 0; i < 32; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
