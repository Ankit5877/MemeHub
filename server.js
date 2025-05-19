const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/AuthRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api/auth", authRoutes);

// Catch-all route for undefined API requests
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

