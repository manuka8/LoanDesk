// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Verify login token
exports.authenticate = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findByPk(decoded.id);
        if (!req.user) {
            return res.status(401).json({ message: "Invalid token user" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized token" });
    }
};

// Allow only Admin users
exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "Admin") {
        return res.status(403).json({ message: "Access denied. Admin only." });
    }
    next();
};
