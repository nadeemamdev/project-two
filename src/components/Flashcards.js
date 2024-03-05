// Flashcards.js
import React, { useState, /* useEffect */ } from 'react';
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
      <h2>📚 Flashcards</h2>
      <button className='togglebutton' onClick={toggleGallery}>
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
          title: 'The World Wide Web',
          content: 'The World Wide Web is an expansive information space accessible via the Internet. It comprises documents and resources identified by URLs and can be accessed using web browsers.',
        },
        {
          title: 'Web Development Basics',
          content: 'Web development basics involve understanding the core concepts of HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. These technologies form the foundation of creating websites and web applications.',
        },
        {
          title: 'Browsers and Rendering',
          content: 'Different web browsers may render web pages differently due to variations in rendering engines. It\'s essential to consider cross-browser compatibility during web development.',
        },
        {
          title: 'HTTP and HTTPS',
          content: 'HTTP (Hypertext Transfer Protocol) is the standard protocol for data communication on the web. HTTPS adds a layer of security by employing SSL/TLS encryption for secure data transmission.',
        },
        {
          title: 'DNS (Domain Name System)',
          content: 'DNS translates human-readable domain names into IP addresses, allowing users to access websites using familiar URLs.',
        },
        {
          title: 'Web Standards',
          content: 'Following web standards, as defined by organizations like W3C, is crucial for ensuring compatibility, accessibility, and a consistent user experience across different platforms.',
        },
        {
          title: 'Responsive Design Principles',
          content: 'Responsive design involves creating websites that adapt seamlessly to various devices and screen sizes. It employs techniques like media queries and flexible layouts.',
        },
        {
          title: 'SEO (Search Engine Optimization)',
          content: 'SEO is the practice of optimizing websites to improve their visibility on search engines. It involves strategies like using relevant keywords, creating quality content, and optimizing meta tags.',
        },
        {
          title: 'Web Hosting',
          content: 'Choosing reliable web hosting is crucial for website deployment. Factors such as server speed, security features, and scalability should be considered.',
        },
        {
          title: 'Version Control',
          content: 'Version control systems like Git help manage and track changes in code. Platforms like GitHub and GitLab provide hosting for repositories, enabling collaboration among developers.',
        },
      ];
    case 'HTML':
      return [
        {
          title: 'HTML Structure',
          content: 'HTML provides the structural foundation for web content, using elements such as <html>, <head>, and <body>. Proper nesting and indentation enhance code readability.',
        },
        {
          title: 'Semantic HTML',
          content: 'Semantic HTML involves using elements like <header>, <nav>, and <article> to convey the meaning and structure of the content. This enhances accessibility and search engine optimization.',
        },
        {
          title: 'Forms and Input Elements',
          content: 'HTML forms, created using <form>, <input>, and related elements, enable user interaction on websites. Understanding form attributes like action and method is crucial.',
        },
        {
          title: 'Links and Navigation',
          content: 'Hyperlinks (<a>) and navigation menus, often built using lists (<ul> and <li>), play a vital role in guiding users through web content.',
        },
        {
          title: 'Images and Multimedia',
          content: 'HTML elements such as <img> for images and <audio>/<video> for multimedia content allow developers to enhance the visual and auditory aspects of websites.',
        },
        {
          title: 'HTML Entities',
          content: 'HTML entities, such as &lt; for < and &gt; for >, are used to represent special characters, ensuring proper rendering and avoiding conflicts.',
        },
        {
          title: 'Metadata',
          content: 'Metadata, defined using elements like <meta>, provides additional information about the HTML document, influencing how browsers interpret and display the page.',
        },
        {
          title: 'Document Outline',
          content: 'Understanding the document outline, formed by headings (<h1> to <h6>), contributes to accessibility and SEO. Properly structured headings enhance the user experience.',
        },
        {
          title: 'HTML5 New Features',
          content: 'HTML5 introduces new elements like <section>, <article>, and <nav>, along with features such as <canvas> and <localStorage> that enhance web capabilities.',
        },
        {
          title: 'Data Attributes',
          content: 'Data attributes (e.g., data-*) allow developers to attach custom data to HTML elements. These attributes can be accessed and manipulated using JavaScript or CSS.',
        },
      ];
    case 'CSS':
      return [
        {
          title: 'CSS Styling',
          content: 'CSS (Cascading Style Sheets) is used to apply styles to HTML elements. Properties like color, font-size, and margin control the visual presentation of content.',
        },
        {
          title: 'Selectors and Specificity',
          content: 'CSS selectors target HTML elements for styling, and specificity determines which styles take precedence in case of conflicts.',
        },
        {
          title: 'Flexbox Layout',
          content: 'Flexbox is a one-dimensional layout model that simplifies the creation of flexible and efficient layouts. It is particularly useful for designing responsive interfaces.',
        },
        {
          title: 'Grid Layout',
          content: 'CSS Grid provides a two-dimensional layout system, allowing for complex grid-based designs. It offers precise control over both rows and columns.',
        },
        {
          title: 'Responsive Design Techniques',
          content: 'Responsive design techniques, such as media queries, enable developers to create layouts that adapt to different screen sizes. A mobile-first approach is commonly adopted.',
        },
        {
          title: 'Transitions and Animations',
          content: 'CSS transitions and animations add dynamic effects to web elements. Developers can control properties like duration, timing function, and delay.',
        },
        {
          title: 'Transforms',
          content: 'CSS transforms, including rotate, scale, and translate, modify the appearance of elements, providing enhanced visual effects.',
        },
        {
          title: 'Positioning',
          content: 'CSS positioning (e.g., static, relative, absolute) determines the layout and placement of elements within a document.',
        },
        {
          title: 'Vendor Prefixes',
          content: 'Vendor prefixes (-webkit-, -moz-, -ms-, -o-) are used to ensure compatibility with different browsers, especially for experimental or non-standard features.',
        },
        {
          title: 'CSS Variables',
          content: 'CSS variables (custom properties) simplify style maintenance by allowing developers to define and reuse values throughout stylesheets.',
        },
      ];
    case 'JavaScript':
      return [
        {
          title: 'JavaScript Basics',
          content: 'JavaScript, a versatile scripting language, involves understanding variables, data types, and basic operators. It is commonly used for web development.',
        },
        {
          title: 'Functions and Scope',
          content: 'Functions encapsulate code for reusability, and scope defines the visibility and accessibility of variables within a program.',
        },
        {
          title: 'DOM Manipulation',
          content: 'JavaScript interacts with the Document Object Model (DOM) to dynamically manipulate the structure and content of HTML documents.',
        },
        {
          title: 'Event Handling',
          content: 'Events (e.g., click, keypress) trigger JavaScript actions. Event listeners capture and respond to user interactions.',
        },
        {
          title: 'Asynchronous JavaScript',
          content: 'JavaScript is single-threaded, but asynchronous functions (e.g., callbacks, promises) allow non-blocking operations. AJAX (Asynchronous JavaScript and XML) is used for asynchronous communication with servers.',
        },
        {
          title: 'Object-Oriented Programming (OOP)',
          content: 'JavaScript supports OOP principles like encapsulation and inheritance. Objects, classes, and prototypes are fundamental to OOP in JavaScript.',
        },
        {
          title: 'ES6 Features',
          content: 'ECMAScript 6 (ES6) introduced new features like arrow functions, let/const declarations, and template literals. These features enhance code readability and maintainability.',
        },
        {
          title: 'Error Handling',
          content: 'Handle errors using try-catch blocks to prevent crashes and improve debugging. Use console.log() for debugging during development.',
        },
        {
          title: 'Local Storage and Cookies',
          content: 'Local storage allows for storing data persistently on the client side. Cookies also store data but have size limitations and are sent with every HTTP request.',
        },
        {
          title: 'AJAX and Fetch API',
          content: 'Use AJAX or the Fetch API to make asynchronous HTTP requests. The Fetch API is more modern and provides a cleaner syntax for fetching data.',
        },
      ];
    case 'React':
      return [
        {
          title: 'Introduction to React',
          content: 'React is a JavaScript library for building user interfaces. It allows for creating reusable UI components and efficiently managing the state of an application.',
        },
        {
          title: 'JSX (JavaScript XML)',
          content: 'JSX is a syntax extension for JavaScript recommended for use with React. It allows developers to write UI elements in a syntax similar to XML or HTML.',
        },
        {
          title: 'Components and Props',
          content: 'In React, components are the building blocks of UI. Props (short for properties) allow data to be passed from parent to child components.',
        },
        {
          title: 'State and Lifecycle',
          content: 'State is used for creating dynamic and interactive components. Understanding the lifecycle methods helps manage component behavior over time.',
        },
        {
          title: 'Event Handling in React',
          content: 'React supports event handling similar to HTML, but with camelCase naming conventions. Event handlers are defined as methods in React components.',
        },
        {
          title: 'Conditional Rendering',
          content: 'Conditional rendering in React allows developers to show or hide components based on certain conditions. It enhances the flexibility of UI components.',
        },
        {
          title: 'Forms and Controlled Components',
          content: 'React handles forms using controlled components, where form elements are controlled by React state. This ensures a single source of truth for form data.',
        },
        {
          title: 'React Router',
          content: 'React Router is a popular library for implementing navigation in React applications. It allows developers to create a single-page application with navigation.',
        },
        {
          title: 'State Management with Redux',
          content: 'Redux is a predictable state container for JavaScript apps. It helps manage the state of an entire application in a predictable way.',
        },
        {
          title: 'Hooks in React',
          content: 'Hooks are functions that let developers use React state and lifecycle features in functional components. They were introduced in React 16.8.',
        },
      ];
    case 'Responsive Design':
      return [
        {
          title: 'Media Queries',
          content: 'Media queries are CSS techniques for applying different styles based on characteristics of the device, such as screen width, height, or resolution.',
        },
        {
          title: 'Fluid Grid Layouts',
          content: 'Fluid grid layouts use relative units like percentages instead of fixed units like pixels for creating flexible and responsive designs.',
        },
        {
          title: 'Flexible Images',
          content: 'Flexible images are images that scale with the size of the parent container, ensuring they adapt to different screen sizes without losing quality.',
        },
        {
          title: 'Mobile-First Design',
          content: 'Mobile-first design is an approach where the design process starts with designing for mobile devices and then progressively enhances for larger screens.',
        },
        {
          title: 'Viewport Meta Tag',
          content: 'The viewport meta tag is used to control the viewport behavior, such as setting the initial scale, width, and preventing zooming on mobile devices.',
        },
        {
          title: 'CSS Frameworks for Responsive Design',
          content: 'CSS frameworks like Bootstrap and Foundation provide pre-built components and styles that facilitate the development of responsive web designs.',
        },
        {
          title: 'Device Testing and Debugging',
          content: 'Testing and debugging on actual devices, including various smartphones and tablets, is crucial to ensure a consistent and optimized user experience.',
        },
        {
          title: 'Performance Optimization',
          content: 'Optimizing performance for responsive designs involves techniques like lazy loading images, minimizing HTTP requests, and utilizing content delivery networks (CDNs).',
        },
        {
          title: 'Progressive Enhancement',
          content: 'Progressive enhancement is a strategy where basic functionality is provided to all users, and advanced features are added for users with modern browsers and devices.',
        },
        {
          title: 'CSS Grid and Flexbox for Layouts',
          content: 'CSS Grid and Flexbox are powerful layout tools that aid in creating complex and responsive layouts for various screen sizes.',
        },
      ];
    default:
      return [];
  }
};

export default Flashcards;
