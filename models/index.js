const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require("./user")(sequelize, Sequelize);
db.Product = require("./product")(sequelize, Sequelize);

// Tambahkan model lain nanti: Transaction, TransactionItem, dll

module.exports = db;
