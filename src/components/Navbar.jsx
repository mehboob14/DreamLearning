import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom"; // Only if using react-router-dom

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative container mx-auto flex justify-between items-center p-4 bg-white shadow-md">
    
      <div className="text-2xl font-bold text-gray-800">FineLearning</div>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/Home" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Home</Link>
        <Link to="/Gallery" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Gallery</Link>
        <Link to="/Course" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">CreateCourse</Link>
        <Link to="/Settings" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Settings</Link>
      </div>

      <div className="md:hidden">
        <FiAlignLeft
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-md flex flex-col space-y-2 md:hidden">
          <Link to="/Home" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/Gallery" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">Gallery</Link>
          <Link to="/Course" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">CreateCourse</Link>
          <Link to="/Settings" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
        </div>
      )}
    </nav>
  );
}
