const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Loan = require('./loan');

const Transaction = sequelize.define('Transaction', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  action: { type: DataTypes.STRING(100) },
  amount: { type: DataTypes.DECIMAL(10,2) },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: 'transactions',
  timestamps: false,
});

Transaction.belongsTo(User, { foreignKey: 'userId' });
Transaction.belongsTo(Loan, { foreignKey: 'loanId' });

module.exports = Transaction;
