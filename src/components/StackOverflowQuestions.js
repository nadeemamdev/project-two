// StackOverflowQuestions.js
import React from 'react';
import './StackOverflowQuestions.css'; 

const StackOverflowQuestions = ({ questions }) => {
  return (
    <div className="stack-overflow-questions">
      <h2>🤔 Stack Overflow Questions</h2>
      <p>Dive into Web Development Discussions</p>
      <ul>
        {questions.map((question) => (
          <li key={question.question_id}>
            <a
              href={question.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{question.title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackOverflowQuestions;
