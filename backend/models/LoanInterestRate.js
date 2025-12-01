const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Loan = require('./loan');

const LoanInterestRate = sequelize.define('LoanInterestRate', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  // Which loan template this rate belongs to
  loanId: { type: DataTypes.INTEGER, allowNull: false },

  // Duration in months
  durationMonths: { type: DataTypes.INTEGER, allowNull: false },

  // Interest rate for this duration
  interestRate: { type: DataTypes.DECIMAL(5,2), allowNull: false }
}, {
  tableName: 'loan_interest_rates',
  timestamps: true
});

// Associations
LoanInterestRate.belongsTo(Loan, { foreignKey: 'loanId', onDelete: 'CASCADE' });
Loan.hasMany(LoanInterestRate, { foreignKey: 'loanId' });

module.exports = LoanInterestRate;
