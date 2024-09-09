import React, { useState } from 'react';
import { storage } from '../firebase'; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios'; 
import { API } from '../utils/constants'; 

const UploadVideo = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoURL, setVideoURL] = useState("");
  const [name, setName] = useState(""); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value); 
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `videos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress function
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          // Handle error
          console.error("Upload failed:", error);
        },
        () => {
          // Handle successful upload and get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setVideoURL(downloadURL);
            console.log("File available at", downloadURL);
            sendVideoData(name, downloadURL); // Send video data to backend API
          });
        }
      );
    }
  };

  // Function to send video data to backend
  const sendVideoData = (name, videoURL) => {
    const videoData = {
      name: name,
      video: videoURL,
    };

    axios.post(`${API}/video/upload-video/`, videoData)
      .then((response) => {
        console.log('Video data saved successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error saving video data:', error);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
      <input
        type="text"
        placeholder="Enter video name"
        value={name}
        onChange={handleNameChange}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {progress > 0 && <div>Upload Progress: {progress}%</div>}
      {videoURL && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Uploaded Video URL:</h3>
          <a href={videoURL} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            {videoURL}
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
