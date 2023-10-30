const express = require("express");
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const userRoute = express.Router();

// #POST USER
userRoute.post("/", createUser);

// #GET USER
userRoute.get("/", getUsers);  

// #GET USER BY ID
userRoute.get("/:id", getSingleUser);

// #UPDATE USER
userRoute.patch("/:id", updateUser);

// #DELETE USER
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;
