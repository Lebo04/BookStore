const express = require("express");
const path = require("path");
const route = express.Router();
const bodyParser = require("body-parser");

const { User, Admin, Item, Cart } = require("../model");
const user = new User();
const item = new Item();
const admin = new Admin();
const cart = new Cart();

route.get("^/$|/KG Books", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

//------Users--------//

route.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

// route.get('/forgotPassword', (req, res) => {
//   res.render('forgotPassword')
// })

// route.post('/forgotPassword', (req, res) => {
//   user.forgotPassword(req, res);
// }) 

// route.get('/resetPassword/:id/token', (req, res) => {
  
// })

// route.post('/resetPassword/:id/token', (req, res) => {
  
// })

route.get("/users", (req, res) => {
  user.getUsers(req, res);
});

route.get("/user/:id", (req, res) => {
  user.getUser(req, res);
});

route.put("/user/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

route.post("/registerUser", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});

route.delete("/user/:id", (req, res) => {
  user.deleteUser(req, res);
});

//------Admin--------//

route.post("/signIn", bodyParser.json(), (req, res) => {
  admin.login(req, res);
});

route.get("/admins", (req, res) => {
  admin.getAdmins(req, res);
});

route.get("/admin/:id", (req, res) => {
  admin.getAdmin(req, res);
});

route.put("/admin/:id", bodyParser.json(), (req, res) => {
  admin.updateAdmin(req, res);
});

route.post("/registerAdmin", bodyParser.json(), (req, res) => {
  admin.createAdmin(req, res);
});

route.delete("/admin/:id", (req, res) => {
  admin.deleteAdmin(req, res);
});

//-------Products---------//
route.get("/items", (req, res) => {
  item.getItems(req, res);
});

route.get("/item/:id", (req, res) => {
  item.getItem(req, res);
});

route.post("/item", bodyParser.json(), (req, res) => {
  item.addItem(req, res);
});

route.put("/item/:id", bodyParser.json(), (req, res) => {
  item.updateItem(req, res);
});

route.delete("/item/:id", (req, res) => {
  item.deleteItem(req, res);
});

//-------Cart---------//
route.get("/user/:id/carts", (req, res) => {
  cart.getCartItems(req, res);
});

route.get("/user/:id/cart", (req, res) => {
  cart.getCartItem(req, res);
});

route.post("/user/:id/cart", bodyParser.json(), (req, res) => {
  cart.addToCart(req, res);
});

route.put("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
  cart.updateCart(req, res);
});

route.delete("/user/:id/cart", (req, res) => {
  cart.deleteCart(req, res);
});

route.delete("/user/:id/cart/:id", (req, res) => {
  cart.deleteCart(req, res);
});

module.exports = route;
