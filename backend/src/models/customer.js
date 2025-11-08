const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  nic: { type: DataTypes.STRING(15), unique: true },
  phone: { type: DataTypes.STRING(15) },
  address: { type: DataTypes.TEXT },
}, {
  tableName: 'customers',
  timestamps: true,
});

module.exports = Customer;
