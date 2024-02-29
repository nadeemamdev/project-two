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
          question: 'What is the World Wide Web?',
          options: ['A global spider web', 'An information space accessible via the Internet', 'A worldwide network of computers'],
          correctAnswer: 'An information space accessible via the Internet',
        },
        {
          question: 'What are the basics of web development?',
          options: ['Java and Python', 'HTML, CSS, and JavaScript', 'Networking and Database Management'],
          correctAnswer: 'HTML, CSS, and JavaScript',
        },
        {
          question: 'What does URL stand for?',
          options: ['Uniform Resource Locator', 'Universal Rendering Language', 'Unique Reference Language'],
          correctAnswer: 'Uniform Resource Locator',
        },
        {
          question: 'What is the purpose of HTML?',
          options: ['Styling web pages', 'Creating dynamic content', 'Structuring web documents'],
          correctAnswer: 'Structuring web documents',
        },
        {
          question: 'Which programming language is commonly used for web development?',
          options: ['Java', 'Python', 'JavaScript'],
          correctAnswer: 'JavaScript',
        },
        {
          question: 'What is the primary role of CSS?',
          options: ['Server-side scripting', 'Styling web pages', 'Data storage'],
          correctAnswer: 'Styling web pages',
        },
        {
          question: 'What is the Document Object Model (DOM)?',
          options: ['A style of programming', 'A model for document creation', 'A programming interface for web documents'],
          correctAnswer: 'A programming interface for web documents',
        },
        {
          question: 'What does the term "HTTP" stand for?',
          options: ['HyperText Transfer Protocol', 'High Tech Transfer Protocol', 'Hyper Transfer Text Protocol'],
          correctAnswer: 'HyperText Transfer Protocol',
        },
        {
          question: 'What is the purpose of the <a> tag in HTML?',
          options: ['Define a section of code', 'Create a link', 'Format text'],
          correctAnswer: 'Create a link',
        },
        {
          question: 'What is the purpose of the <div> element in HTML?',
          options: ['Define a division or a section', 'Create a hyperlink', 'Insert an image'],
          correctAnswer: 'Define a division or a section',
        },
      ];

    case 'HTML':
      return [
        {
          question: 'What is the purpose of the HTML <head> element?',
          options: ['Define the main content of the HTML document', 'Contain metadata about the HTML document', 'Create a header for the HTML document'],
          correctAnswer: 'Contain metadata about the HTML document',
        },
        {
          question: 'What does the HTML <em> tag represent?',
          options: ['Emphasized text', 'End of a document', 'Editable text'],
          correctAnswer: 'Emphasized text',
        },
        {
          question: 'Which HTML tag is used to create a numbered list?',
          options: ['<ol>', '<ul>', '<li>'],
          correctAnswer: '<ol>',
        },
        {
          question: 'What is the purpose of the HTML <img> element?',
          options: ['Insert an image', 'Create a hyperlink', 'Define a block of code'],
          correctAnswer: 'Insert an image',
        },
        {
          question: 'What does the attribute "alt" in the <img> tag provide?',
          options: ['Alternative text for the image', 'Alignment for the image', 'Animated effect for the image'],
          correctAnswer: 'Alternative text for the image',
        },
        {
          question: 'Which HTML tag is used to create a hyperlink?',
          options: ['<link>', '<a>', '<href>'],
          correctAnswer: '<a>',
        },
        {
          question: 'What does the HTML <br> tag represent?',
          options: ['Bold text', 'Break line', 'Block of code'],
          correctAnswer: 'Break line',
        },
        {
          question: 'What is the purpose of the HTML <table> element?',
          options: ['Create a form', 'Define a block of code', 'Organize data in rows and columns'],
          correctAnswer: 'Organize data in rows and columns',
        },
        {
          question: 'Which HTML tag is used to create an unordered list?',
          options: ['<ol>', '<li>', '<ul>'],
          correctAnswer: '<ul>',
        },
        {
          question: 'What is the purpose of the HTML <form> element?',
          options: ['Create a table', 'Organize data', 'Collect user input'],
          correctAnswer: 'Collect user input',
        },
      ];

    case 'CSS':
      return [
        {
          question: 'What does CSS stand for?',
          options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
          correctAnswer: 'Cascading Style Sheets',
        },
        {
          question: 'Which property is used to change the font size in CSS?',
          options: ['font-style', 'font-family', 'font-size'],
          correctAnswer: 'font-size',
        },
        {
          question: 'What is the purpose of the CSS property "margin"?',
          options: ['Change the color of text', 'Set the margin space around an element', 'Adjust the height of an element'],
          correctAnswer: 'Set the margin space around an element',
        },
        {
          question: 'What does the CSS property "display: flex" do?',
          options: ['Enable flexbox layout', 'Change the display mode to inline', 'Hide an element'],
          correctAnswer: 'Enable flexbox layout',
        },
        {
          question: 'What is the purpose of CSS pseudo-classes?',
          options: ['Select and style elements based on their state', 'Apply styles to the first child element', 'Hide elements'],
          correctAnswer: 'Select and style elements based on their state',
        },
        {
          question: 'Which CSS property is used for adding shadows to elements?',
          options: ['shadow', 'box-shadow', 'text-shadow'],
          correctAnswer: 'box-shadow',
        },
        {
          question: 'What is the default position value in CSS?',
          options: ['relative', 'absolute', 'static'],
          correctAnswer: 'static',
        },
        {
          question: 'How can you apply a style to every other row in a table with CSS?',
          options: [':odd', ':even', ':nth-child(even)'],
          correctAnswer: ':nth-child(even)',
        },
        {
          question: 'What does the CSS property "float" do?',
          options: ['Align text to the center', 'Float an element to the right or left', 'Increase the font size'],
          correctAnswer: 'Float an element to the right or left',
        },
        {
          question: 'What is the purpose of the CSS property "transition"?',
          options: ['Create smooth transitions between property values', 'Change the element position', 'Rotate an element'],
          correctAnswer: 'Create smooth transitions between property values',
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
          question: 'What is the purpose of the JavaScript method "querySelector()"?',
          options: ['Select the first element that matches a specified selector', 'Change the document title', 'Create a new HTML element'],
          correctAnswer: 'Select the first element that matches a specified selector',
        },
        {
          question: 'What is the result of the expression 5 + "5" in JavaScript?',
          options: ['10', '55', 'Error'],
          correctAnswer: '55',
        },
        {
          question: 'What does the JavaScript function "parseInt()" do?',
          options: ['Parse a string and return an integer', 'Round a floating-point number', 'Create a new array'],
          correctAnswer: 'Parse a string and return an integer',
        },
        {
          question: 'What is the purpose of the JavaScript "addEventListener()" method?',
          options: ['Remove an event listener', 'Add a new HTML element', 'Attach an event handler to an element'],
          correctAnswer: 'Attach an event handler to an element',
        },
        {
          question: 'What is the JavaScript event loop?',
          options: ['A loop that iterates through an array', 'A mechanism that processes asynchronous tasks', 'A loop for calculating mathematical operations'],
          correctAnswer: 'A mechanism that processes asynchronous tasks',
        },
        {
          question: 'What does the "this" keyword refer to in JavaScript?',
          options: ['The current function', 'The global object', 'The calling object'],
          correctAnswer: 'The calling object',
        },
        {
          question: 'How do you declare a JavaScript arrow function?',
          options: ['function myFunction()', 'myFunction = () => {}', 'const myFunction = function() {}'],
          correctAnswer: 'myFunction = () => {}',
        },
        {
          question: 'What is the purpose of the JavaScript "fetch()" function?',
          options: ['Retrieve resources asynchronously from the network', 'Fetch user input', 'Fetch data from a local storage'],
          correctAnswer: 'Retrieve resources asynchronously from the network',
        },
        {
          question: 'What is the JavaScript "map()" method used for?',
          options: ['Create a new array with the results of calling a provided function on every element', 'Apply a function to each element in an array', 'Remove elements from an array'],
          correctAnswer: 'Create a new array with the results of calling a provided function on every element',
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
          question: 'What is the purpose of React components?',
          options: ['Define the structure of an HTML document', 'Encapsulate reusable pieces of UI', 'Animate elements on a page'],
          correctAnswer: 'Encapsulate reusable pieces of UI',
        },
        {
          question: 'Which lifecycle method is called after a React component renders?',
          options: ['componentDidMount', 'componentWillUnmount', 'componentDidUpdate'],
          correctAnswer: 'componentDidMount',
        },
        {
          question: 'In React, what is state?',
          options: ['The visual appearance of a component', 'A JavaScript object that stores component data', 'The duration of an animation'],
          correctAnswer: 'A JavaScript object that stores component data',
        },
        {
          question: 'What is the purpose of React props?',
          options: ['Define the layout of a component', 'Pass data from a parent component to a child component', 'Style a React component'],
          correctAnswer: 'Pass data from a parent component to a child component',
        },
        {
          question: 'What is the role of the virtual DOM in React?',
          options: ['Analyze the document object model', 'A backup copy of the actual DOM', 'Improve performance by updating only changed elements'],
          correctAnswer: 'Improve performance by updating only changed elements',
        },
        {
          question: 'How can you update the state in a React component?',
          options: ['By directly modifying the state object', 'By using the setState() method', 'By creating a new component instance'],
          correctAnswer: 'By using the setState() method',
        },
        {
          question: 'What is the purpose of the React "Router" library?',
          options: ['Handle HTTP requests', 'Manage component styles', 'Enable navigation in a React application'],
          correctAnswer: 'Enable navigation in a React application',
        },
        {
          question: 'What does the React "useState" hook do?',
          options: ['Perform asynchronous operations', 'Add state to functional components', 'Fetch data from an API'],
          correctAnswer: 'Add state to functional components',
        },
        {
          question: 'What is a React higher-order component (HOC)?',
          options: ['A component with a higher index in the component tree', 'A function that takes a component and returns a new component', 'A component with a higher level of complexity'],
          correctAnswer: 'A function that takes a component and returns a new component',
        },
      ];

    case 'Responsive Design':
      return [
        {
          question: 'What is responsive design in web development?',
          options: ['Creating websites that respond to user input', 'Designing websites for multiple devices and screen sizes', 'Implementing quick response features in web applications'],
          correctAnswer: 'Designing websites for multiple devices and screen sizes',
        },
        {
          question: 'What is the purpose of media queries in responsive design?',
          options: ['Apply styles based on device characteristics', 'Create animations', 'Define variables'],
          correctAnswer: 'Apply styles based on device characteristics',
        },
        {
          question: 'What is the difference between responsive design and adaptive design?',
          options: ['They are synonymous terms', 'Responsive design uses fixed layouts, while adaptive design uses flexible layouts', 'Adaptive design adjusts to various devices, while responsive design uses a single layout'],
          correctAnswer: 'Adaptive design adjusts to various devices, while responsive design uses a single layout',
        },
        {
          question: 'What is the viewport meta tag used for in responsive design?',
          options: ['Set the background color of a webpage', 'Control the viewport behavior on mobile devices', 'Define the font size for mobile screens'],
          correctAnswer: 'Control the viewport behavior on mobile devices',
        },
        {
          question: 'What is the concept of "mobile-first design"?',
          options: ['Designing exclusively for mobile devices', 'Creating designs for desktop first and then adapting for mobile', 'Prioritizing mobile design and progressively enhancing for larger screens'],
          correctAnswer: 'Prioritizing mobile design and progressively enhancing for larger screens',
        },
        {
          question: 'How can CSS frameworks contribute to responsive design?',
          options: ['They provide pre-built components and styles for responsive layouts', 'They add dynamic behavior to web pages', 'They optimize server-side rendering'],
          correctAnswer: 'They provide pre-built components and styles for responsive layouts',
        },
        {
          question: 'Why is device testing and debugging crucial for responsive design?',
          options: ['To ensure consistent and optimized user experience', 'To test hardware compatibility', 'To reduce the file size of web assets'],
          correctAnswer: 'To ensure consistent and optimized user experience',
        },
        {
          question: 'What does the term "progressive enhancement" mean in the context of responsive design?',
          options: ['Enhancing the visual appearance of a website', 'Adding advanced features only for modern devices', 'Providing a basic experience to all users and enhancing for modern browsers and devices'],
          correctAnswer: 'Providing a basic experience to all users and enhancing for modern browsers and devices',
        },
        {
          question: 'How can the CSS property "flexbox" be useful in responsive design?',
          options: ['It allows the creation of flexible and responsive layouts', 'It adds a glossy effect to elements', 'It animates page transitions'],
          correctAnswer: 'It allows the creation of flexible and responsive layouts',
        },
        {
          question: 'What is the role of images in responsive design, and how can it be optimized?',
          options: ['Images are not suitable for responsive design', 'Images should be high-resolution for all devices', 'Optimizing image sizes and using responsive images to adapt to different screen sizes'],
          correctAnswer: 'Optimizing image sizes and using responsive images to adapt to different screen sizes',
        },
      ];

    default:
      return [];
  }
};

export default Quizzes;
