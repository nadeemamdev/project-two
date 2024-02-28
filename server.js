const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Importing the flashcards route
const flashcardsRoute = require("./routes/flashcards");

const app = express();
const PORT = process.env.PORT || 3000; // Change the port to 3000

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

// Serve static files from 'build' directory
app.use(express.static(path.join(__dirname, "build")));

// Catch-all handler for any request that doesn't match an API route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
