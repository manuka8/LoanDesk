// controllers/loanController.js
const LoanType = require("../models/loanType");

// Add new loan type
exports.addLoanType = async (req, res) => {
    try {
        const { name, description, interestRate, maxAmount } = req.body;

        if (!name || !interestRate || !maxAmount) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const loanType = await LoanType.create({
            name,
            description,
            interestRate,
            maxAmount,
        });

        return res.status(201).json({
            message: "Loan type added successfully",
            loanType,
        });
    } catch (error) {
        console.error("Error adding loan type:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Modify loan type
exports.updateLoanType = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const loanType = await LoanType.findByPk(id);

        if (!loanType) {
            return res.status(404).json({ message: "Loan type not found" });
        }

        await loanType.update(updates);

        return res.status(200).json({
            message: "Loan type updated successfully",
            loanType,
        });
    } catch (error) {
        console.error("Error updating loan type:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Get all loan types
exports.getAllLoanTypes = async (req, res) => {
    try {
        const loanTypes = await LoanType.findAll();
        res.status(200).json(loanTypes);
    } catch (error) {
        console.error("Error fetching loan types:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get one loan type
exports.getLoanType = async (req, res) => {
    try {
        const loanType = await LoanType.findByPk(req.params.id);

        if (!loanType) {
            return res.status(404).json({ message: "Loan type not found" });
        }

        res.status(200).json(loanType);
    } catch (error) {
        console.error("Error fetching loan type:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Delete loan type (optional)
exports.deleteLoanType = async (req, res) => {
    try {
        const loanType = await LoanType.findByPk(req.params.id);

        if (!loanType) {
            return res.status(404).json({ message: "Loan type not found" });
        }

        await loanType.destroy();

        res.status(200).json({ message: "Loan type deleted successfully" });
    } catch (error) {
        console.error("Error deleting loan type:", error);
        res.status(500).json({ message: "Server error" });
    }
};
