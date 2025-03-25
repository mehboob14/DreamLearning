import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 flex justify-between items-center transition-all duration-300 
      ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900 shadow-md"}`}>
      
    
      <div className="text-lg font-bold">DreamLearning</div>
      
  
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
          Gallery
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
          Create Courses
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition">
          Settings
        </button>
      </div>
      
      {/* Right-side Icons */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl hover:text-gray-400 transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="text-xl hover:text-gray-400 transition">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
}
