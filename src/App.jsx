import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Home />
      </div>
    </div>
  );
}
