/** @format */

// server.js
// This is the Node.js server for the Flashcard application.

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Importing the flashcards route
const flashcardsRoute = require("./routes/flashcards");

const app = express();
const PORT = process.env.PORT || 3307;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/decks", flashcardsRoute);

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
	res.status(404).send("Sorry, that route does not exist.");
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "build"))); // Serve static files from 'build' directory

app.get("*", (req, res) => {
	// Catch-all handler for any request that doesn't match an API route
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
