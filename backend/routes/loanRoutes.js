// routes/loanRoutes.js
const express = require("express");
const router = express.Router();

const {
    addLoanType,
    updateLoanType,
    getAllLoanTypes,
    getLoanType,
    deleteLoanType
} = require("../controllers/loanController");

const { authenticate, authorizeAdmin } = require("../middlewares/authMiddleware");

// Public - Get all & single loan types
router.get("/", getAllLoanTypes);
router.get("/:id", getLoanType);

// Admin Only - Protected Routes
router.post("/", authenticate, authorizeAdmin, addLoanType);
router.put("/:id", authenticate, authorizeAdmin, updateLoanType);
router.delete("/:id", authenticate, authorizeAdmin, deleteLoanType);

module.exports = router;
