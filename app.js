//1-import Express framework
const express = require("express");
//2-create the application
const app = express();
//3-config the app tou use json
app.use(express.json());
//4-trun on the server
//4.1 export the app

//7 bring the routes
const { usersRouter } = require("./routes/user.routes");
const { tasksRouter } = require("./routes/task.routes");
//6.2 Creat the endpoints
app.use("/api/v1/users", usersRouter); // ----> create the routes folder and create the file
app.use("/api/v1/tasks", tasksRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} doesn't exist `,
  });
});

module.exports = { app };
