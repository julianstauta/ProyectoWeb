import { Meteor } from 'meteor/meteor'

var MongoClient = require('mongodb').MongoClient;

var db;
const MongoURI = "mongodb+srv://admin:1107522635@webdb-mkec1.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(MongoURI, { useUnifiedTopology: true, useNewUrlParser: true, },
  function (err, database) {
    if (err) throw err;

    db = database.db("loldb");
    player = db.collection("players");
    player.find({  }).toArray(function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    });
  });

  if(Meteor.isServer ){
    Meteor.publish('players' , () => {
      player = db.collection("players");
      return player.find({  });
    })
}