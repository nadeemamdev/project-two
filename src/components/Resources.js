import React from 'react';
import './Resources.css';

const Resources = () => {
  // Placeholder for resources logic
  const generalResources = [
    { title: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
    { title: 'Stack Overflow', link: 'https://stackoverflow.com/' },
    { title: 'W3Schools', link: 'https://www.w3schools.com/' },
    { title: 'CSS-Tricks', link: 'https://css-tricks.com/' },
    { title: 'freeCodeCamp', link: 'https://www.freecodecamp.org/' },
    { title: 'GitHub Guides', link: 'https://guides.github.com/' },
  ];

  const coursesList = [
    { title: 'Web Development Basics', link: 'https://www.freecodecamp.org/' },
    { title: 'Git and GitHub', link: 'https://lab.github.com/' },
    { title: 'JavaScript Basics', link: 'https://javascript.info/' },
    { title: 'React Course', link: 'https://www.codecademy.com/learn/react-101' },
    { title: 'Python Programming', link: 'https://www.codecademy.com/learn/learn-python-3' },
    { title: 'Data Science with Kaggle', link: 'https://www.kaggle.com/learn/overview' },
  ];

  return (
    <div>
      <h2 className="resources-section-title">🔗 General Resources</h2>
      <ul>
        {generalResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li>
        ))}
      </ul>
      <br></br>
      <h2 className="resources-section-title">🎓 Courses</h2>
      <ul>
        {coursesList.map((course, index) => (
          <li key={index}>
            <a href={course.link} target="_blank" rel="noopener noreferrer">{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
