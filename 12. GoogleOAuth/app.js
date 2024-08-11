// Import necessary modules and configurations
import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import expressSession from "express-session";

// Import custom modules
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.js";
import "./config/googleStrategy.js"; // Import the passport configuration

// Initialize the Express application
const app = express();

// Load environment variables
dotenv.config();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session handling
app.use(
  expressSession({
    secret: process.env.EXPRESS_SECRET, // Set a secret for session encryption
    resave: false, // Don't resave the session if nothing is modified
    saveUninitialized: false, // Don't create a session until something is stored
  })
);

// Initialize Passport and manage session state
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.use("/auth", authRouter);

// Start the server and connect to the database
app.listen(3000, async () => {
  try {
    await connectDB(); // Ensure database is connected before starting the server
    console.log("Server is running on port 3000");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit if the database connection fails
  }
});
