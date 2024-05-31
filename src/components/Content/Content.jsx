import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../../features/videoSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebass";
import { doc, setDoc } from "firebase/firestore";
import { FaPlay, FaPause, FaThumbsUp, FaShareAlt } from "react-icons/fa";

const HomePage = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = 'AIzaSyAZqaOmk88wEM2UuUwV1nzLwzW-bsXa0Xg';
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 10, // Adjust this number as needed
            key: apiKey
          }
        });
        dispatch(setVideos(response.data.items));
      } catch (error) {
        console.error('Error fetching popular videos:', error);
      }
    };
    fetchVideos();
  }, [dispatch]);

  const addToWatchlist = async (video) => {
    if (!user) {
      navigate("/login");
      return;
    }
    const watchlistRef = doc(db, "watchlists", user.uid);
    try {
      await setDoc(watchlistRef, { videos: [video] }, { merge: true });
      console.log(`Added ${video.snippet.title} to watchlist.`);
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

  const handlePlayPause = (videoId) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  const handleLike = (video) => {
    if (!user) {
      navigate("/login");
      return;
    }
    console.log(`Liked ${video.snippet.title}`);
  };

  const handleShare = (video) => {
    if (!user) {
      navigate("/login");
      return;
    }
    const url = `https://www.youtube.com/watch?v=${video.id}`;
    if (navigator.share) {
      navigator.share({
        title: video.snippet.title,
        url: url
      }).then(() => {
        console.log(`Shared ${video.snippet.title}`);
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      // Fallback for browsers that do not support the Web Share API
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard');
      }).catch((error) => {
        console.error('Error copying link:', error);
      });
    }
  };

  return (
    <div className="p-4 mx-auto max-w-screen-xl">
      <h1 className="text-2xl font-bold mb-4">Video List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <li key={video.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
              {playingVideo === video.id ? (
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              ) : (
                <div className="relative">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => handlePlayPause(video.id)}
                  />
                  <button
                    onClick={() => handlePlayPause(video.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl"
                  >
                    {playingVideo === video.id ? <FaPause /> : <FaPlay />}
                  </button>
                </div>
              )}
            </div>
            <h2 className="text-lg font-semibold mt-2">{video.snippet.title}</h2>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => addToWatchlist(video)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                Add to Watchlist
              </button>
              <button
                onClick={() => handleLike(video)}
                className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 flex items-center space-x-1"
              >
                <FaThumbsUp /> <span>Like</span>
              </button>
              <button
                onClick={() => handleShare(video)}
                className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex items-center space-x-1"
              >
                <FaShareAlt /> <span>Share</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
