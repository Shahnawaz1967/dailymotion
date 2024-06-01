import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // List of channels with their details
  const channels = [
    { name: 'HW News Network', logo: 'path_to_hw_news_network_logo', link: '/hw-news-network' },
    { name: 'OutlookIndia', logo: 'path_to_outlook_india_logo', link: '/outlook-india' },
    { name: 'HW News English', logo: 'path_to_hw_news_english_logo', link: '/hw-news-english' },
    { name: 'HW News Marathi', logo: 'path_to_hw_news_marathi_logo', link: '/hw-news-marathi' },
    { name: 'Comedy Tadka', logo: 'path_to_comedy_tadka_logo', link: '/comedy-tadka' },
    { name: 'Tuk Tuk TV', logo: 'path_to_tuk_tuk_tv_logo', link: '/tuk-tuk-tv' },
    { name: 'Moxx Music Bhakti', logo: 'path_to_moxx_music_bhakti_logo', link: '/moxx-music-bhakti' },
    { name: 'Aaj Tak', logo: 'path_to_aaj_tak_logo', link: '/aaj-tak' },
    { name: 'India Today', logo: 'path_to_india_today_logo', link: '/india-today' },
    { name: 'NewsNation', logo: 'path_to_news_nation_logo', link: '/news-nation' },
  ];

  return (
    <aside className="bg-gray-100 p-4 sm:w-64">
      {/* Toggle button for mobile view */}
      <button
        className="block sm:hidden mb-4 p-2 bg-blue-600 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>

      {/* Sidebar content */}
      <div className={`sm:block ${isOpen ? 'block' : 'hidden'}`}>
        <h2 className="text-lg font-bold mb-4">Popular</h2>
        <ul>
          {channels.map((channel, index) => (
            <li key={index} className="mb-2">
              <a href={channel.link} className="flex items-center space-x-2">
                {/* Logo image */}
                <img src={channel.logo} alt={`${channel.name} logo`} className="w-8 h-8" />
                {/* Channel name */}
                <span>{channel.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
