const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const LoanType = require('./loanType');

const Loan = sequelize.define('Loan', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },

  // Loan name
  name: {
    type: DataTypes.STRING(150),
    allowNull: false
  },

  // Loan description
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  // Base amount for this loan template
  principalAmount: { 
    type: DataTypes.DECIMAL(10,2), 
    allowNull: false 
  },

  // Track when the loan template was created
  createdDate: { 
    type: DataTypes.DATEONLY, 
    allowNull: false, 
    defaultValue: DataTypes.NOW // default to current date
  }

}, {
  tableName: 'loans',
  timestamps: true // keeps createdAt and updatedAt
});

// Associations
Loan.belongsTo(LoanType, { foreignKey: 'typeId', allowNull: false, onDelete: 'RESTRICT' });
LoanType.hasMany(Loan, { foreignKey: 'typeId' });

module.exports = Loan;
