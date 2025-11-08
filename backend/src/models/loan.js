const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');
const LoanType = require('./loanType');

const Loan = sequelize.define('Loan', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  principalAmount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  interestRate: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  startDate: { type: DataTypes.DATEONLY },
  dueDate: { type: DataTypes.DATEONLY },
  status: { 
    type: DataTypes.ENUM('pending', 'approved', 'repaid', 'defaulted'),
    defaultValue: 'pending' 
  },
}, {
  tableName: 'loans',
  timestamps: true,
});

// Associations
Loan.belongsTo(Customer, { foreignKey: 'customerId' });
Loan.belongsTo(LoanType, { foreignKey: 'typeId' });

module.exports = Loan;
