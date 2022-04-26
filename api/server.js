require("./mongoConnection");

const express = require("express");
const cookieParser = require("cookie-parser");

const mongodb = require("mongodb");

const randomId = require('random-id');
const app = express(),
  bodyParser = require("body-parser");
port = 3070;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/usl/dist'));

/*app.get('/api/users', (req, res) => {
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

app.get("/api/registerUser", (req, res) => {
  const hash = req.body.hash;
  console.log(hash);
})