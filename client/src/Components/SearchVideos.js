import React, { useState } from 'react';

const SearchVideos = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Add search logic here
    console.log("Searching for:", query);
    // Example result
    setResults([{ id: 1, title: "Sample Video", url: "#" }]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Videos</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter video title"
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
      <div className="mt-4">
        {results.map((video) => (
          <div key={video.id} className="border-b py-2">
            <a href={video.url} className="text-blue-600 hover:underline">{video.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchVideos;
