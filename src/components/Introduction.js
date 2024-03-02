// Introduction.js
import React, { useState } from 'react';
import './Introduction.css';

const Introduction = () => {
  const [content] = useState([
    {
      channel: 'LearnCode.academy',
      videos: [
        { id: 'RjHflb-QgVc', thumbnail: 'learncode-1.gif', url: 'https://www.youtube.com/watch?v=RjHflb-QgVc' },
        { id: 'J35jug1uHzE', thumbnail: 'learncode-2.gif', url: 'https://www.youtube.com/watch?v=J35jug1uHzE' },
        { id: 'videoId3', thumbnail: 'learncode-3.gif', url: 'https://www.youtube.com/watch?v=dMK_3lH1YPo' },
      ],
    },
    {
      channel: 'SuperSimpleDev',
      videos: [
        { id: 'G3e-cpL7ofc', thumbnail: 'supersimpledev-1.gif', url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' },
        { id: 'SBmSRK3feww', thumbnail: 'supersimpledev-2.gif', url: 'https://www.youtube.com/watch?v=SBmSRK3feww' },
        { id: 'Ka77djMkSwg', thumbnail: 'supersimpledev-3.gif', url: 'https://www.youtube.com/watch?v=Ka77djMkSwg' },
      ],
    },
    {
      channel: 'Fireship',
      videos: [
        { id: '66tfvFeALBQ', thumbnail: 'fireship-1.gif', url: 'https://www.youtube.com/watch?v=66tfvFeALBQ' },
        { id: 'erEgovG9WBs', thumbnail: 'fireship-2.gif', url: 'https://www.youtube.com/watch?v=erEgovG9WBs' },
        { id: 'lkIFF4maKMU&t=460s', thumbnail: 'fireship-3.gif', url: 'https://www.youtube.com/watch?v=lkIFF4maKMU&t=460s' },
      ],
    },
    // Add more channels as needed
  ]);
  return (
    <div className="introduction-container">
      <p>
        <span className="intro-highlight">
          <strong>Have you ever wondered about coding and web development?</strong>
        </span>
        <br />
        Explore this page to find out if it's the right path for you!
        Take this Coding Quiz to see if it's your thing!<br></br>
        Also, check out these cool videos to get a taste of the coding world.
        <br />
        <a href="https://iscodingforyou.com/" target="_blank" rel="noopener noreferrer">Coding Quiz</a>
      </p>

      <div className="channel-grid">
        {content.map((channel, index) => (
          <div key={index} className="channel-column">
            <h3>{channel.channel}</h3>
            {channel.videos.map((video, videoIndex) => (
              <div key={videoIndex} onClick={() => window.open(video.url, '_blank')}>
                <img
                  src={video.thumbnail}
                  alt={`Video ${videoIndex + 1} Thumbnail`}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;