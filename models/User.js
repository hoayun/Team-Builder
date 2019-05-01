const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
  "user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    screenname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }

  })