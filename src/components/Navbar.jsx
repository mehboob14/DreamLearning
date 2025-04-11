import { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative container mx-auto flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">FineLearning</div>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center space-x-4">
        <li><Link to="/" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">Home</Link></li>
        <li><Link to="/Gallery" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">Gallery</Link></li>
        <li><Link to="/CreateCourse" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">CreateCourse</Link></li>
        <li><Link to="/Settings" className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">Settings</Link></li>
      </ul>

      <div className="md:hidden">
        <FiAlignLeft
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-md flex flex-col space-y-2 md:hidden">
          <Link to="/" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/Gallery" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">Gallery</Link>
          <Link to="/CreateCourse" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">CreateCourse</Link>
          <Link to="/Settings" className="font-bold px-3 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
        </div>
      )}
    </nav>
  );
}
