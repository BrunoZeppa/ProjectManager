//--------======================    UTILS    =============================------
//4.4 create the db conection
//4.5 import Sequelize from sequelize
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const db = new Sequelize({
  //4.6 stablish the language
  dialect: "postgres",
  //4.7 satablish host
  host: process.env.DB_HOST,
  //4.8 put the username
  username: process.env.DB_USERNAME,
  //4.9 put the password og pg
  password: process.env.DB_PASSWORD,
  //5 put the port
  port: process.env.DB_PORT,
  //5.1 Stablish de db name
  database: process.env.DB, // -----> create the database in pg befor continuo the next steps
  //5.2 set config for reduce terminal data
  logging: false,
});

module.exports = { db, DataTypes };
