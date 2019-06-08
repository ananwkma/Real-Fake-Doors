const express = require('express')
const app = express();
let cors = require('cors');

let data = require('./data.js')


let tweets = [];


app.use(cors());

app.get('/', function (req, res) {
  res.send(tweets);
});

 app.get('/addDumbTweet', function (req, res) {
  tweets.push('lol');
  res.send('done');
});


app.listen(3000);