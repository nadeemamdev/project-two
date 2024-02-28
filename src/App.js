// App.js
import React from 'react';
import './components/App.css';
import logo from './logo.svg';
import Flashcards from './components/Flashcards';
import Quizzes from './components/Quizzes';
import Introduction from './components/Introduction';
import Resources from './components/Resources';

function App() {
  return (
    <div>
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1>WebDev Learning Hub</h1>
          <p>Your gateway to learning web development!</p>
        </header>
        {/* Introduction */}
        <Introduction />
        <main className="main-content">

          {/* General Knowledge Section */}
          <div className="section">
            <h2>General Knowledge</h2>
            <p>Enhance your overall web development understanding.</p>
            <Flashcards sectionName="General Knowledge" />
            <Quizzes sectionName="General Knowledge" />
          </div>

          {/* HTML Section */}
          <div className="section">
            <h2>HTML</h2>
            <p>Explore the fundamentals of HTML.</p>
            <Flashcards sectionName="HTML" />
            <Quizzes sectionName="HTML" />
          </div>

          {/* CSS Section */}
          <div className="section">
            <h2>CSS</h2>
            <p>Dive into the world of Cascading Style Sheets.</p>
            <Flashcards sectionName="CSS" />
            <Quizzes sectionName="CSS" />
          </div>

          {/* JavaScript Section */}
          <div className="section">
            <h2>JavaScript</h2>
            <p>Master the scripting language for web development.</p>
            <Flashcards sectionName="JavaScript" />
            <Quizzes sectionName="JavaScript" />
          </div>

          {/* React Section */}
          <div className="section">
            <h2>React</h2>
            <p>Learn about building user interfaces with React.js.</p>
            <Flashcards sectionName="React" />
            <Quizzes sectionName="React" />
          </div>

          {/* Responsive Design Section */}
          <div className="section">
            <h2>Responsive Design</h2>
            <p>Discover the principles of creating responsive websites.</p>
            <Flashcards sectionName="Responsive Design" />
            <Quizzes sectionName="Responsive Design" />
          </div>

         {/* Resources Section */}
          <div className="section">
            <Resources />
          </div>

        </main>
        <footer>
          <p>&copy; 2024 WebDev Learning Hub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
