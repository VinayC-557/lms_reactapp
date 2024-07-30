import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="video"
         width="960" 
         height="540"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
