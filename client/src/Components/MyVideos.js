import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../utils/constants';
import Video from './Video';

const MyVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${API}/video/upload-video/`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="border rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative">
              <video className="w-full h-48 object-cover">
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-75" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold text-gray-800">{video.name}</h3>
              <p className="text-sm text-gray-600">{video.description || 'No description'}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full">
            <Video src={selectedVideo.video} />
            <h3 className="text-xl font-bold mt-2">{selectedVideo.name}</h3>
            <p className="text-gray-600 mt-1">{selectedVideo.description || 'No description'}</p>
            <button 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleCloseVideo}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyVideos;