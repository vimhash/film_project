const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
