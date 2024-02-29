// App.js
import React, { useState } from 'react';
import './components/App.css';
import Flashcards from './components/Flashcards';
import Quizzes from './components/Quizzes';
import Introduction from './components/Introduction';
import Resources from './components/Resources';
import ContactForm from './components/ContactForm';

function App() {
  const [activeTab, setActiveTab] = useState('Introduction');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="container">
        <header className="header">
          <h1>💻 WebDev Learning Hub </h1>
          <p>Your gateway to learning web development!</p>
        </header>

        {/* Navigation Bar */}
        <nav className="navbar">
          <div
            className={`nav-item ${activeTab === 'Introduction' ? 'active' : ''}`}
            onClick={() => handleTabClick('Introduction')}
          >
            Introduction
          </div>
          <div
            className={`nav-item ${activeTab === 'FlashcardsQuizzes' ? 'active' : ''}`}
            onClick={() => handleTabClick('FlashcardsQuizzes')}
          >
            Flashcards & Quizzes
          </div>
          <div
            className={`nav-item ${activeTab === 'ResourcesContact' ? 'active' : ''}`}
            onClick={() => handleTabClick('ResourcesContact')}
          >
            Resources & Contact
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          {/* Introduction Section */}
          {activeTab === 'Introduction' && <Introduction />}

          {/* Flashcards & Quizzes Section */}
          {activeTab === 'FlashcardsQuizzes' && (
            <>
              <div className="section">
                <h2 className="title">General Knowledge</h2>
                <p>Enhance your overall web development understanding.</p>
                <Flashcards sectionName="General Knowledge" />
                <Quizzes sectionName="General Knowledge" />
              </div>

              <div className="section">
                <h2 className="title">HTML</h2>
                <p>Explore the fundamentals of HTML.</p>
                <Flashcards sectionName="HTML" />
                <Quizzes sectionName="HTML" />
              </div>

              {/* CSS Section */}
              <div className="section">
                <h2 className='title'>CSS</h2>
                <p>Dive into the world of Cascading Style Sheets.</p>
                <Flashcards sectionName="CSS" />
                <Quizzes sectionName="CSS" />
              </div>

              {/* JavaScript Section */}
              <div className="section">
                <h2 className='title'>JavaScript</h2>
                <p>Master the scripting language for web development.</p>
                <Flashcards sectionName="JavaScript" />
                <Quizzes sectionName="JavaScript" />
              </div>

              {/* React Section */}
              <div className="section">
                <h2 className='title'>React</h2>
                <p>Learn about building user interfaces with React.js.</p>
                <Flashcards sectionName="React" />
                <Quizzes sectionName="React" />
              </div>

              {/* Responsive Design Section */}
              <div className="section">
                <h2 className='title'>Responsive Design</h2>
                <p>Discover the principles of creating responsive websites.</p>
                <Flashcards sectionName="Responsive Design" />
                <Quizzes sectionName="Responsive Design" />
              </div>
            </>
          )}

          {/* Resources & Contact Section */}
          {activeTab === 'ResourcesContact' && (
            <>
              <div className="section">
                <Resources />
              </div>

              <div className="section">
                <ContactForm />
              </div>
            </>
          )}
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; 2024 WebDev Learning Hub. All rights reserved. Created by Naddem & Meriam</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
