const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Loan = require('./loan');

const Payment = sequelize.define('Payment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  paymentDate: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
  method: { 
    type: DataTypes.ENUM('cash', 'card', 'bank_transfer'),
    defaultValue: 'cash'
  },
}, {
  tableName: 'payments',
  timestamps: true,
});

Payment.belongsTo(Loan, { foreignKey: 'loanId' });

module.exports = Payment;
