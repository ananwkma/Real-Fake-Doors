const express = require('express');
const app = express();
let cors = require('cors');

let data = require('./data.js');
let cart = require('./cart.js');
let bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.get('/', function (req, res) {
  res.json(data);
});

app.get('/getCart', function (req, res) {
  res.send(cart); 
})

app.put('/cart', function (req, res) {
  const { id, price, dictId, name } = req.body;
  cart[dictId] = cart[dictId] ? { id: id, price: price, name: name, quantity: cart[dictId].quantity+1 } : 
                                { id: id, price: price, name: name, quantity: 1 }
  res.send(cart);
})

app.listen(3000);