/** @format */

import React, { useState, useEffect } from "react";
import FlashcardDeck from "./components/FlashcardDeck";
import api from "./utils/api";

function App() {
	const [decks, setDecks] = useState([]);
	const [currentDeck, setCurrentDeck] = useState(null);

	useEffect(() => {
		// Fetch all decks from the API on component mount
		api.getDecks().then(data => {
			setDecks(data);
			// Automatically select the first deck if available
			if (data.length > 0) {
				setCurrentDeck(data[0]);
			}
		});
	}, []);

	const handleDeckChange = deckId => {
		// Find and set the current deck based on deckId
		const deck = decks.find(d => d.id === deckId);
		setCurrentDeck(deck);
	};

	return (
		<div className="App">
			<header className="bg-blue-500 text-white p-4">
				<h1 className="text-xl">Flashcard App</h1>
			</header>
			<main className="p-4">
				{decks.length > 0 && (
					<div>
						<h2 className="text-lg mb-2">Select a Deck:</h2>
						<select
							onChange={e => handleDeckChange(e.target.value)}
							value={currentDeck?.id || ""}
						>
							{decks.map(deck => (
								<option key={deck.id} value={deck.id}>
									{deck.name}
								</option>
							))}
						</select>
					</div>
				)}
				{currentDeck && <FlashcardDeck deck={currentDeck} />}
			</main>
		</div>
	);
}

export default App;
