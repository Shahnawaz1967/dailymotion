import React from 'react';

const ProductModal= ({ video, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
        <img src={video.thumbnails.default.url} alt={video.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-xl font-semibold mb-4">Views: {video.viewCount}</p>
        <div>
          <h3 className="text-xl font-bold mb-2">{video.channelTitle}</h3>
          <p>{video.description}</p>
          <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
