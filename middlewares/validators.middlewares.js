const { body, validationResult } = require("express-validator");

const checkValidations = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    const message = errorMessages.join(". ");

    return res.status(400).json({
      status: "error",
      massage: message,
    });
  }
  next();
};

const createUserValidations = [
  body("name")
    .isString()
    .withMessage("user most be text characters only")
    .notEmpty()
    .withMessage("name can not be empty")
    .isLength({ min: 2 }),
  body("email").isEmail().withMessage('you must provide a valid email "@"'),
  body("password")
    .isString()
    .withMessage("password most be a text characters")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),
  checkValidations,
];

const createTaskValidations = [
  body("title")
    .isString()
    .withMessage("Task title most be text characters only")
    .notEmpty()
    .withMessage("Task can not be empty")
    .isLength({ min: 7 })
    .withMessage("Title must be at least 7 words"),
  body("limitDate").isDate().withMessage("limitDate must be a date"),
  body("startDate").isDate().withMessage("startDate must be a date"),
  body("finishDate").isDate().withMessage("finishDate must be a date"),
  checkValidations,
];
module.exports = { createUserValidations, createTaskValidations };
