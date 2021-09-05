const { Sequelize, DataTypes } = require('sequelize');
const database = require("../database/db")

const User = database.define('User', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false

  }
});


module.exports = User;