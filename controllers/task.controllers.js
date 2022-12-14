const { User } = require("../models/user.model");
const { Task } = require("../models/task.model");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      include: [{ model: User, attributes: ["id", "name", "email", "status"] }],
    });

    res.status(200).json({
      status: "success",
      data: { tasks },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneTask = async (req, res, next) => {
  try {
    const { task } = req;

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, userId, limitDate, startDate, finishDate } = req.body;

    const newTask = await Task.create({
      userId,
      title,
      limitDate,
      startDate,
      finishDate,
    });

    res.status(201).json({
      status: "success",
      data: { newTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { task } = req;
    const { finishDate } = req.body;

    await task.update({ finishDate });
    if (task.limitDate >= task.finishDate) {
      await task.update({ status: "completed" });
    } else if (task.limitDate < task.finishDate) {
      await task.update({ status: "late" });
    }

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { task } = req;

    await task.update({ status: "cancelled" });

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
};
