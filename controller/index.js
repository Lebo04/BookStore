const express = require("express");
const path = require("path");
const route = express.Router();
const bodyParser = require("body-parser");

const { Product, User, Admin } = require("../model");
const user = new User();
const product = new Product();
const admin = new Admin();

route.get("^/$|/KG Books", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

//------Users--------//

route.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

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
route.get("/products", (req, res) => {
  product.getProducts(req, res);
});

route.get("/product/:id", (req, res) => {
  product.getProduct(req, res);
});

route.post("/product", bodyParser.json(), (req, res) => {
  product.addProduct(req, res);
});

route.put("/product/:id", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});

route.put("/product/:id", bodyParser.json(), (req, res) => {
  product.forgotPassword(req, res);
});

route.delete("/product/:id", (req, res) => {
  product.deleteProduct(req, res);
});

module.exports = route;
