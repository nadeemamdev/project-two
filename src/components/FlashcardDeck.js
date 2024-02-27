/** @format */

import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

function FlashcardDeck({ deck }) {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);

	useEffect(() => {
		// Reset to the first card and hide answer when deck changes
		setCurrentCardIndex(0);
		setShowAnswer(false);
	}, [deck]);

	const handleNextCard = () => {
		// Show the next card and hide the answer
		if (currentCardIndex < deck.cards.length - 1) {
			setCurrentCardIndex(currentCardIndex + 1);
		} else {
			setCurrentCardIndex(0); // Loop back to the first card
		}
		setShowAnswer(false);
	};

	const handleShowAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	return (
		<div className="flashcard-deck">
			{deck.cards.length > 0 ? (
				<div>
					<Flashcard
						card={deck.cards[currentCardIndex]}
						showAnswer={showAnswer}
						onShowAnswer={handleShowAnswer}
					/>
					<div className="mt-4 flex justify-between items-center">
						<button
							className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
							onClick={handleNextCard}
						>
							Next Card
						</button>
						<span className="text-sm text-gray-600">
							Card {currentCardIndex + 1} of {deck.cards.length}
						</span>
					</div>
				</div>
			) : (
				<p>No cards in this deck.</p>
			)}
		</div>
	);
}

export default FlashcardDeck;
