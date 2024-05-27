// src/components/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div>
      <video src={video.url} controls className="w-full" />
      <h2 className="text-2xl font-bold mt-4">{video.title}</h2>
      <p>{video.channel}</p>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
