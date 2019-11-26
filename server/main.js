import { WebApp } from 'meteor/webapp';
import express from 'express';

var MongoClient = require('mongodb').MongoClient;
const app = express();
const bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;

var db;
const MongoURI = "mongodb+srv://admin:1107522635@webdb-mkec1.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(MongoURI, { useUnifiedTopology: true, useNewUrlParser: true, },
  function (err, database) {
    if (err) throw err;

    db = database.db("loldb");
    WebApp.connectHandlers.use(app);
  });

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/api/getPlayers/', (req, res) => {
 const player = db.collection("players");

  player.find({}).toArray(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }    
  });
});

app.get('/api/getTeam/:teamname', (req, res) => {
  const teamname = req.params.teamname;
  const teams = db.collection("teams");
   teams.find({"name": teamname}).toArray(function (err, result) {
     if (err) {
       res.status(500).send(err);
     } else {
       res.send(result);
     }    
   });
 });

 app.get('/api/getNationality/:nationality', (req, res) => {
  const nationality = req.params.nationality;
  const nats = db.collection("nationalities");
   nats.find({"name": nationality}).toArray(function (err, result) {
     if (err) {
       res.status(500).send(err);
     } else {
       console.log(result)
       res.send(result);
     }    
   });
 });

 app.post('/api/login', (req, res) => {

  const email = req.body.email
  const password = req.body.password

  const users = db.collection("users");

  users.find({ "email": email }).toArray(function (err, result) {
    if (err) {
      console.log(err)
    } else {
      if (result.length == 1) {
        if (result[0].password == password) {
          res.status(200).json({ message: 'User data is OK' });
        } else {
          res.status(401).json({ message: 'User or password do not match' });
        }
      } else {
        res.status(401).json({ message: 'User do not exists' });
      }
    }
  });
});

app.post('/api/singup', (req, res) => {

  const name = req.body.name
  const lastname = req.body.lastname
  const email = req.body.email
  const phone = req.body.phone
  const password = req.body.password

  const users = db.collection("users");

  users.find({ "email": email }).toArray(function (err, result) {
    if (err) {
      console.log(err)
    } else {
      if (result.length == 0) {

        var newUser = {
          "name": name, "lastname": lastname, "email": email, "phone": phone, "password": password, uteams: [],
        };
        
        console.log(newUser)
        users.insertOne(newUser, function (err, res) {
          if (err) throw err;
        });
        res.status(200).json({ message: 'User added successfully' });
      } else {
        res.status(401).json({ message: 'User already exists' });
      }
    }
  });
});