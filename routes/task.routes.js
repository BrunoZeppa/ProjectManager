const express = require("express");

//controllers
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controllers");

//middlewares
const { taskExistGet } = require("../middlewares/taskGetStatus.middleware");
const {
  taskExistForUaD,
} = require("../middlewares/teskUpdateADelete.middleware");

const {
  createTaskValidations,
} = require("../middlewares/validators.middlewares");

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);

tasksRouter.get("/:status", taskExistGet, getOneTask);

tasksRouter.post("/", createTaskValidations, createTask);

tasksRouter.patch("/:id", taskExistForUaD, updateTask);

tasksRouter.delete("/:id", taskExistForUaD, deleteTask);

module.exports = { tasksRouter };
