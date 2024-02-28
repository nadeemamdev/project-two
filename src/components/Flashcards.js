// Flashcards.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Flashcards.css';

const Flashcards = ({ sectionName }) => {
  const flashcardsData = getFlashcardsData(sectionName);
  const [showGallery, setShowGallery] = useState(false);
  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flashcards-container">
      <h2>Flashcards</h2>
      <button onClick={toggleGallery}>
        {showGallery ? 'Hide' : 'Show'}
      </button>
      {showGallery && (
        <Slider {...settings}>
          {flashcardsData.map((card, index) => (
            <div key={index}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

// Function to get flashcard data based on the section name
const getFlashcardsData = (sectionName) => {
  switch (sectionName) {
    case 'General Knowledge':
      return [
        {
          title: 'Web Development Basics',
          content: 'Build a solid foundation by enhancing your understanding of web development concepts such as HTML, CSS, and JavaScript. Explore key terminologies and principles that are essential for every web developer.',
        },
        {
          title: 'Frontend Technologies',
          content: 'Explore the world of frontend technologies, including HTML for structure, CSS for styling, and JavaScript for interactivity. Understand how these technologies work together to create engaging and dynamic web pages.',
        },
      ];
    case 'HTML':
      return [
        {
          title: 'HTML Structure',
          content: 'Learn about the basic structure of HTML documents, including the doctype declaration, head, and body. Understand the role of HTML tags in creating the structure of a web page.',
        },
        {
          title: 'HTML Forms',
          content: 'Explore the use of HTML forms to collect user input. Understand form elements such as input fields, checkboxes, and radio buttons, and learn how to handle form submissions.',
        },
      ];
    case 'CSS':
      return [
        {
          title: 'CSS Box Model',
          content: 'Understand the CSS box model, including concepts of margin, border, and padding. Learn how to control the layout and spacing of elements on a web page using CSS properties.',
        },
        {
          title: 'CSS Flexbox',
          content: 'Explore CSS Flexbox, a layout model that allows you to design complex layouts more efficiently. Learn how to create flexible and responsive designs using Flexbox.',
        },
      ];
    case 'JavaScript':
      return [
        {
          title: 'JavaScript Functions',
          content: 'Master the use of functions in JavaScript, including function declarations, expressions, and parameters. Understand how functions are used to organize and execute code.',
        },
        {
          title: 'JavaScript Events',
          content: 'Explore JavaScript events and event handling. Learn how to respond to user interactions such as clicks, mouseovers, and keyboard input to create dynamic and interactive web pages.',
        },
      ];
    case 'React':
      return [
        {
          title: 'Introduction to JSX',
          content: 'Understand JSX (JavaScript XML), a syntax extension for JavaScript used with React. Learn how JSX makes it easier to write and understand React components.',
        },
        {
          title: 'React State and Props',
          content: 'Explore React state and props, essential concepts for managing and passing data in React applications. Understand how to create dynamic and interactive user interfaces.',
        },
      ];
    case 'Responsive Design':
      return [
        {
          title: 'Media Queries',
          content: 'Learn about media queries in CSS, a key component of responsive design. Understand how to apply different styles based on the characteristics of the user\'s device.',
        },
        {
          title: 'Responsive Layouts',
          content: 'Explore techniques for creating responsive layouts using CSS. Learn how to design websites that adapt to various screen sizes and provide an optimal user experience.',
        },
      ];
    default:
      return [];
  }
};

export default Flashcards;
