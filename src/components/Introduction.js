// Introduction.js
import React, { useState } from 'react';
import './Introduction.css';

const Introduction = () => {
  const [content] = useState([
    {
      channel: 'LearnCode.academy',
      videos: [
        { id: 'RjHflb-QgVc', thumbnail: 'https://i.ytimg.com/vi/RjHflb-QgVc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD01hFYuOyt18AwdOPsdh-N4lMLeQ', url: 'https://www.youtube.com/watch?v=RjHflb-QgVc' },
        { id: 'J35jug1uHzE', thumbnail: 'https://i.ytimg.com/an_webp/J35jug1uHzE/mqdefault_6s.webp?du=3000&sqp=CPC3_q4G&rs=AOn4CLAwIKvoSl5imFsZU8qnzwK7FdDtoQ', url: 'https://www.youtube.com/watch?v=J35jug1uHzE' },
        { id: 'videoId3', thumbnail: 'https://i.ytimg.com/an_webp/dMK_3lH1YPo/mqdefault_6s.webp?du=3000&sqp=COSh_q4G&rs=AOn4CLCwsW2H-YhP_hm2f5ZRsq-ykhEMVg', url: 'https://www.youtube.com/watch?v=dMK_3lH1YPo' },
      ],
    },
    {
      channel: 'SuperSimpleDev',
      videos: [
        { id: 'G3e-cpL7ofc', thumbnail: 'https://i.ytimg.com/an_webp/G3e-cpL7ofc/mqdefault_6s.webp?du=3000&sqp=CP2r_q4G&rs=AOn4CLDVnOVAOwS2ZLHBwKy_lAtZZAzaxQ', url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc' },
        { id: 'SBmSRK3feww', thumbnail: 'https://i.ytimg.com/an_webp/SBmSRK3feww/mqdefault_6s.webp?du=3000&sqp=CLjF_q4G&rs=AOn4CLBN0XKJ51xgdWS-VdM-KhcYWfq5_Q', url: 'https://www.youtube.com/watch?v=SBmSRK3feww' },
        { id: 'Ka77djMkSwg', thumbnail: 'https://i.ytimg.com/an_webp/Ka77djMkSwg/mqdefault_6s.webp?du=3000&sqp=CMi0_q4G&rs=AOn4CLBQO17rZsdecn0cSyfmI-czozGVpg', url: 'https://www.youtube.com/watch?v=Ka77djMkSwg' },
      ],
    },
    {
      channel: 'Fireship',
      videos: [
        { id: '66tfvFeALBQ', thumbnail: 'https://i.ytimg.com/vi/66tfvFeALBQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyVzIqsvxhjau83OXJq5qMCZBuYw', url: 'https://www.youtube.com/watch?v=66tfvFeALBQ' },
        { id: 'erEgovG9WBs', thumbnail: 'https://i.ytimg.com/an_webp/erEgovG9WBs/mqdefault_6s.webp?du=3000&sqp=CMmq_q4G&rs=AOn4CLCVQ1GRY040-2-kBnZd1KgmzePP8w', url: 'https://www.youtube.com/watch?v=erEgovG9WBs' },
        { id: 'lkIFF4maKMU&t=460s', thumbnail: 'https://i.ytimg.com/an_webp/lkIFF4maKMU/mqdefault_6s.webp?du=3000&sqp=CMu4_q4G&rs=AOn4CLCsIcPf6XOdmtaQ1ALD1lEVxOZcxw', url: 'https://www.youtube.com/watch?v=lkIFF4maKMU&t=460s' },
      ],
    },
    // Add more channels as needed
  ]);

  return (
    <div className="introduction-container">
      <h2>YouTube Channels</h2>
      <div className="channel-grid">
        {content.map((channel, index) => (
          <div key={index} className="channel-column">
            <h3>{channel.channel}</h3>
            {channel.videos.map((video, videoIndex) => (
              <div key={videoIndex} onClick={() => window.open(video.url, '_blank')}>
                <img
                  src={video.thumbnail}
                  alt={`Video ${videoIndex + 1} Thumbnail`}
                  className="thumbnail-image" // Add this class
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

