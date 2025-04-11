const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const path = require("path");
const fs = require("fs");

// Load environment variables
dotenv.config();

// Init express app
const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// Connect to DB
connectDB();

// Ensure uploads directory exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}
app.use("/uploads", express.static(uploadPath)); // Serve images statically

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Error handler
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});