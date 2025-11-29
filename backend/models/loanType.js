const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LoanType = sequelize.define('LoanType', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  interestRate: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  description: { type: DataTypes.TEXT },
}, {
  tableName: 'loan_types',
  timestamps: true,
});

module.exports = LoanType;
