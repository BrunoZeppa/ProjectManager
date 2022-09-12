//--------======================    USER MODEL    =============================------

//5.8 import DataTypes and database from utils
const { DataTypes, db } = require("../utils/db.utils");
//5.9 Create the model variable
const User = db.define("user", {
  //6. define the model table
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

//6.1 export the model
module.exports = { User };
