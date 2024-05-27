import React from 'react'

const Sidebar = () => {
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
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Popular</h2>
      <ul>
        {channels.map((channel, index) => (
          <ChannelItem key={index} channel={channel} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
