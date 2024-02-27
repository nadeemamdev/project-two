/** @format */

// src/utils/api.js
// This module provides functions to interact with the backend API for managing flashcard decks.

const API_URL = "/api"; // Assuming the server is set up to handle requests under "/api"

/**
 * Fetches all decks from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of deck objects.
 */
const getDecks = async () => {
	try {
		const response = await fetch(`${API_URL}/decks`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const decks = await response.json();
		return decks;
	} catch (error) {
		console.error("Error fetching decks:", error);
		throw error;
	}
};

/**
 * Adds a new flashcard to a specified deck.
 * @param {string} deckId The ID of the deck to which the flashcard will be added.
 * @param {Object} card The flashcard object containing the question and answer.
 * @returns {Promise<Object>} A promise that resolves to the updated deck object.
 */
const addFlashcardToDeck = async (deckId, card) => {
	try {
		const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(card),
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const updatedDeck = await response.json();
		return updatedDeck;
	} catch (error) {
		console.error("Error adding flashcard:", error);
		throw error;
	}
};

export default {
	getDecks,
	addFlashcardToDeck,
};
