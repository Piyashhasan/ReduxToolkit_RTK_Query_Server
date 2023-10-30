const Users = require("../models/userModels");

// --- CREATE USER ---
exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, address, about } = req.body;
   
    const newUser = new Users({
      name,
      email,
      phone,
      address,
      about,
    });
    const saveUser = await newUser.save();
    if (!saveUser) {
      res.send("User not created");
    } else {
      res.status(201).send({
        status: true,
        message: "User Created",
      });
    }
  } catch (error) {
    console.log(`Error from create user`);
    console.log(error.message);
  }
};

// --- GET USERS ---
exports.getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find({});
    if (!allUsers) {
      res.status(404).send({
        status: false,
        message: "User not found",
      });
    } else {
      res.status(200).send({
        status: true,
        users: allUsers,
      });
    }
  } catch (error) {
    console.log(`Error from get multiple users`);
    console.log(error.message);
  }
};

// --- GET USER BY ID ---
exports.getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await Users.findById(id);
    if (!singleUser) {
      res.status(404).send({
        status: false,
        message: "User not found",
      });
    } else {
      res.status(200).send({
        status: true,
        users: singleUser,
      });
    }
  } catch (error) {
    console.log(`Error from get single user`);
    console.log(error.message);
  }
};

// --- UPDATE USER ---
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updateUser = await Users.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updateUser) {
      res.status(404).send({
        status: false,
        message: "User not update",
      });
    } else {
      res.status(200).send({
        status: true,
        message: "successfully update user",
        data: updateUser,
      });
    }
  } catch (error) {
    console.log(`Error from update user`);
    console.log(error.message);
  }
};

// --- UPDATE USER ---
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await Users.findByIdAndDelete(id);
    if (!deleteUser) {
      res.status(404).send({
        status: false,
        message: "User not delete",
      });
    } else {
      res.status(200).send({
        status: true,
        message: "successfully delete user",
        data: deleteUser,
      });
    }
  } catch (error) {
    console.log(`Error from delete user`);
    console.log(error.message);
  }
};
