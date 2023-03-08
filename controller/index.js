const express = require("express");
const path = require("path");
const route = express.Router();
const bodyParser = require("body-parser");

const { Product, User, Admin, Item } = require("../model");
const user = new User();
const item = new Item();
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

module.exports = route;
