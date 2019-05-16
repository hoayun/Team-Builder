const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("lfg", "root", "root", {
	host: "localhost",
	dialect: "mysql",
	port:  PORT = process.env.PORT || 8889
});
sequelize.sync({
    force: false
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
