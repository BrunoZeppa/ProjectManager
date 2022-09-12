const dotenv = require("dotenv");
//4.2Import app from ap.js
const { app } = require("./app");
//call the db
const { db } = require("./utils/db.utils");

//11 bring the models to make the relations between does
const { initModels } = require("./models/initModels");

dotenv.config({ path: "./config.env" });

//4.3 create a variable and create the server file
const startServer = async () => {
  try {
    //5.2authenticate the data base
    await db.authenticate();

    initModels();

    //5.3 Sincronize database
    await db.sync();

    //5.4Setup the port
    const PORT = 4005;
    //5.5 put the app to listen the port

    app.listen(PORT, () => {
      console.log("express app running");
    });
  } catch (error) {
    console.log(error);
  }
};
//5.6turn on the server
startServer();
//5.7 --> create the models binder with the models
