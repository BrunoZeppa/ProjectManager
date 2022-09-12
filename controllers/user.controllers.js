const { User } = require("../models/user.model");

const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.findAll();

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAUser = async (req, res, next) => {
  try {
    const { user } = req;

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res, next) => {
  const { name, password, email } = req.body;
  const { user } = req;

  await user.update({ name, password, email });

  res.status(200).json({
    status: "success",
    data: { user },
  });
};

const deleteUser = async (req, res, next) => {
  try {
    const { user } = req;

    await user.update({ status: "deleted" });

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
};
