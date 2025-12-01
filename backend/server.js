// server.js
const dotenv = require('dotenv');
const app = require('./app');
const sequelize = require('./config/database');

// Import all models so Sequelize knows about them
const User = require('./models/user');
const LoanType = require('./models/loanType');
const Loan = require('./models/loan');
const InterestRate = require('./models/LoanInterestRule');
const Payment = require('./models/payment');
const Transaction = require('./models/transaction');


// Add other models if any (Payment, Transaction, MyLoans, etc.)

// Optional: setup associations (if not defined inside models already)
// Example:
// Loan.belongsTo(LoanType, { foreignKey: 'typeId' });
// LoanType.hasMany(Loan, { foreignKey: 'typeId' });

dotenv.config();

// Connect and Sync Database
sequelize.sync({ alter: true }) // alter=true updates tables according to models
  .then(() => console.log("📌 SQL Tables synced successfully"))
  .catch(err => console.log("❌ Sync error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
