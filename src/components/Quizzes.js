// Quizzes.js
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Quizzes.css';

const Quizzes = ({ sectionName }) => {
  const quizzesData = getQuizzesData(sectionName);

  const [userAnswers, setUserAnswers] = useState(Array(quizzesData.length).fill(null));
  const sliderRef = useRef(null); // Ref for Slider component

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();

    // Check answers and calculate score
    const score = userAnswers.reduce((total, answer, index) => {
      return answer === quizzesData[index].correctAnswer ? total + 1 : total;
    }, 0);

    alert(`Your Quiz Score for ${sectionName}: ${score} out of ${quizzesData.length}`);
  };

  const handleOptionClick = (quizIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[quizIndex] = selectedOption;
      return newAnswers;
    });

    // Move to the next slide
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="quizzes-container">
      <h2>Quizzes</h2>
      <form onSubmit={handleQuizSubmit}>
        <Slider {...settings} ref={sliderRef}>
          {quizzesData.map((quiz, index) => (
            <div key={index} className="quiz-slide">
              <p>{quiz.question}</p>
              <ul>
                {quiz.options.map((option, optionIndex) => (
                  <li key={optionIndex} onClick={() => handleOptionClick(index, option)}>
                    <label className={userAnswers[index] === option ? 'selected' : ''}>
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

const getQuizzesData = (sectionName) => {
  switch (sectionName) {
    case 'General Knowledge':
      return [
        {
          question: 'What does CSS stand for?',
          options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
          correctAnswer: 'Cascading Style Sheets',
        },
        {
          question: 'Which programming language is not commonly used for web development?',
          options: ['Java', 'Python', 'C++'],
          correctAnswer: 'C++',
        },
      ];

    case 'HTML':
      return [
        {
          question: 'What does HTML stand for?',
          options: ['Hyper Text Markup Language', 'Highly Typed Machine Learning', 'Home Tool Markup Language'],
          correctAnswer: 'Hyper Text Markup Language',
        },
        {
          question: 'Which HTML tag is used for creating hyperlinks?',
          options: ['<a>', '<h1>', '<p>'],
          correctAnswer: '<a>',
        },
      ];

    case 'CSS':
      return [
        {
          question: 'Which property is used to change the background color in CSS?',
          options: ['background-color', 'color', 'text-color'],
          correctAnswer: 'background-color',
        },
        {
          question: 'What does CSS stand for?',
          options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
          correctAnswer: 'Cascading Style Sheets',
        },
      ];

    case 'JavaScript':
      return [
        {
          question: 'Which keyword is used to declare a variable in JavaScript?',
          options: ['var', 'let', 'const'],
          correctAnswer: 'var',
        },
        {
          question: 'What is the purpose of the `console.log()` method?',
          options: ['Display messages in the console', 'Create a log file', 'Print to the printer'],
          correctAnswer: 'Display messages in the console',
        },
      ];

    case 'React':
      return [
        {
          question: 'What is JSX in React?',
          options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extended'],
          correctAnswer: 'JavaScript XML',
        },
        {
          question: 'Which lifecycle method is called after a component renders?',
          options: ['componentDidMount', 'componentWillUnmount', 'componentDidUpdate'],
          correctAnswer: 'componentDidMount',
        },
      ];

    case 'Responsive Design':
      return [
        {
          question: 'What is the purpose of media queries in responsive design?',
          options: ['Apply styles based on device characteristics', 'Create animations', 'Define variables'],
          correctAnswer: 'Apply styles based on device characteristics',
        },
        {
          question: 'Which CSS property is used to make a website responsive?',
          options: ['@media', 'responsive-layout', 'flexbox'],
          correctAnswer: '@media',
        },
      ];

    default:
      return [];
  }
};

export default Quizzes;
