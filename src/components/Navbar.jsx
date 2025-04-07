import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import "./style.css";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav class='navbar'>
      <div class='main-icon'>
      <a>App-icon</a>
        </div>
        <div>
       <ul class='nav-items'>
        <li>CreateCourse</li>
        <li>Gallery</li>
        <li>Profile-icon</li>
       </ul>
      </div>
      </nav>
  );
}
