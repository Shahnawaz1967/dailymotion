// src/components/Sidebar.js
import React from 'react';

const HeroSection = () => {
  const popularItems = [
    { name: 'HW News Network', icon: '🔥', link: '#' },
    { name: 'OutlookIndia', icon: '🌟', link: '#' },
    { name: 'HW News English', icon: '📰', link: '#' },
    { name: 'HW News Marathi', icon: '📺', link: '#' },
    { name: 'Comedy Tadka', icon: '😂', link: '#' },
    { name: 'Tuk Tuk TV', icon: '🚗', link: '#' },
    { name: 'Moxx Music Bhakti', icon: '🎵', link: '#' },
    { name: 'Aaj Tak', icon: '📢', link: '#' },
    { name: 'India Today', icon: '📺', link: '#' },
    { name: 'NewsNation', icon: '🌐', link: '#' },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4 mt-4">
      <h2 className="text-lg font-bold mb-4">Popular</h2>
      <ul>
        {popularItems.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <span className="mr-2">{item.icon}</span>
            <a href={item.link} className="hover:underline">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSection;
