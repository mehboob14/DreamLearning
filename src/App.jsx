import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import CreateCourse from "./pages/CreateCourse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <div> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/Settings" element={<Settings />} />
        {/* <Route path="/UserProfile" element={<UserProfile />} /> */}
      </Routes>
      </div>
      </div>
  );
}
