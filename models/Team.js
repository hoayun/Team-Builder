const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
  "teams", {
    memo: {
      type: Sequelize.STRING,
      allowNull: false
      
    },
    
    game: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
       },
       player1:{
        type: Sequelize.STRING,
        allowNull: false
       },
       player2:{
        type: Sequelize.STRING,
        allowNull: true
      
       },
       player3:{
        type: Sequelize.STRING,
        allowNull: true
       }
     

  })