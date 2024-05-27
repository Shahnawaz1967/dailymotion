// src/components/VideoList.jsx
import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <div key={index} className="border p-4" onClick={() => onVideoSelect(video)}>
          <img src={video.thumbnail} alt={video.title} />
          <h3 className="text-lg font-bold">{video.title}</h3>
          <p>{video.channel}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
