const express = require('express');
const app = express();
let cors = require('cors');

let data = require('./data.js')
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

let cart = [];

app.get('/', function (req, res) {
  res.json(data);
});

// app.get('/getCart/:doorId', function (req, res) {
//   cart.push(parseInt(req.params.doorId));
//   res.send(cart);
// })

app.post('/cart', function (req, res) {
  let doorId = req.body.id;
  let doorColor = req.body.color;
  cart.push({ doorId, doorColor });
  res.send(cart);
})

app.listen(3000);