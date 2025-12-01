const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Loan = require('./loan');

const Transaction = sequelize.define('Transaction', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  action: { type: DataTypes.STRING(100), allowNull: false },
  amount: { type: DataTypes.DECIMAL(10,2) },

  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: 'transactions',
  timestamps: false,
});

// Associations
Transaction.belongsTo(User, { foreignKey: 'userId', onDelete: 'SET NULL' });
Transaction.belongsTo(Loan, { foreignKey: 'loanId', onDelete: 'CASCADE' });

module.exports = Transaction;
