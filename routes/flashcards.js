/** @format */

// routes/flashcards.js
// This file defines the routes for managing flashcards within decks.

const express = require("express");
const router = express.Router();

// Assuming there's a mock database or a way to store decks in memory for simplicity.
// In a real application, this would interface with a database.
let decks = [
	{
		id: "1",
		name: "JavaScript Basics",
		cards: [
			{
				question: "What is a closure?",
				answer: "A closure is a function having access to the parent scope, even after the parent function has closed.",
			},
		],
	},
];

// GET route to retrieve all decks
router.get("/", (req, res) => {
	res.json(decks);
});

// POST route to add a new deck
router.post("/", (req, res) => {
	const { name } = req.body;
	const newDeck = {
		id: (decks.length + 1).toString(), // Simple ID generation for example purposes
		name,
		cards: [],
	};
	decks.push(newDeck);
	res.status(201).json(newDeck);
});

// POST route to add a new flashcard to a specific deck
router.post("/:deckId/cards", (req, res) => {
	const { deckId } = req.params;
	const { question, answer } = req.body;

	const deck = decks.find(deck => deck.id === deckId);
	if (!deck) {
		return res.status(404).send("Deck not found");
	}

	const newCard = { question, answer };
	deck.cards.push(newCard);

	res.status(201).json(newCard);
});

module.exports = router;
