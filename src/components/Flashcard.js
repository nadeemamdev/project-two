/** @format */

import React from "react";

function Flashcard({ card, showAnswer, onShowAnswer }) {
	return (
		<div className="flashcard p-4 rounded shadow-lg bg-white">
			<div className="question mb-4">
				<h3 className="text-lg font-semibold">Question:</h3>
				<p>{card.question}</p>
			</div>
			<div className={`answer mb-4 ${showAnswer ? "block" : "hidden"}`}>
				<h3 className="text-lg font-semibold">Answer:</h3>
				<p>{card.answer}</p>
			</div>
			<button
				className="show-answer-btn bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
				onClick={onShowAnswer}
			>
				{showAnswer ? "Hide" : "Show"} Answer
			</button>
		</div>
	);
}

export default Flashcard;
