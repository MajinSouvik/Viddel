import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link to="/upload" className="block p-2 rounded hover:bg-blue-500 text-blue-600">Upload Video</Link>
          </li>
          <li>
            <Link to="/search" className="block p-2 rounded hover:bg-blue-500 text-blue-600">Search Videos</Link>
          </li>
          <li>
            <Link to="/my-videos" className="block p-2 rounded hover:bg-blue-500 text-blue-600">My Videos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
