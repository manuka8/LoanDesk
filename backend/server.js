// server.js
const dotenv = require('dotenv');
const app = require('./app');
const sequelize = require('./config/database');

dotenv.config();

// Connect and Sync Database
sequelize.sync({ alter: true })  // <-- Add this!
  .then(() => console.log("📌 SQL Tables synced successfully"))
  .catch(err => console.log("❌ Sync error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
