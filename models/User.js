const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
  "user", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    screenname: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }

  })