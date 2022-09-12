//6.3 import express
const express = require("express");
//6.4 envelop express on model router variable
const usersRouter = express.Router();
//6.5 declare the verbs in the controllers file
const {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
// 6.6 bring the middlewares
const { userExist } = require("../middlewares/user.middlewares");
const {
  createUserValidations,
} = require("../middlewares/validators.middlewares");

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", userExist, getAUser);

usersRouter.post("/", createUserValidations, createUser);

usersRouter.patch("/:id", userExist, updateUser);

usersRouter.delete("/:id", userExist, deleteUser);

module.exports = { usersRouter };
