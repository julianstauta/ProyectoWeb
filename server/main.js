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