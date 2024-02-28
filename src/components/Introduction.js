// IntroductionSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const YouTubeCarousel = () => {
  // Placeholder image URLs
  const placeholderImages = [
    'https://via.placeholder.com/300x169.png?text=Channel+1',
    'https://via.placeholder.com/300x169.png?text=Channel+2',
    'https://via.placeholder.com/300x169.png?text=Channel+3',
    // Add more URLs as needed
  ];

  // External source URLs corresponding to each image
  const externalSourceUrls = [
    'https://www.example.com/external-source-1',
    'https://www.example.com/external-source-2',
    'https://www.example.com/external-source-3',
    // Add more URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {placeholderImages.map((image, index) => (
        <div key={index} onClick={() => window.open(externalSourceUrls[index], '_blank')}>
          <img
            src={image}
            alt={`Channel ${index + 1}`}
            style={{ width: '100%', maxWidth: '600px', margin: '0 auto', cursor: 'pointer' }}
          />
        </div>
      ))}
    </Slider>
  );
};

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-content">
        <h2>Welcome to WebDev Learning Hub!</h2>
        <p>This is your starting point for learning web development. Explore the basics and dive into the world of web technologies with our interactive resources.</p>
      </div>
      <div className="youtube-carousel">
        <YouTubeCarousel />
      </div>
    </section>
  );
};

export default IntroductionSection;
