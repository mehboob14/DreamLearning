import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import "./App.css";
export default function App() {
  return (
    <div >
      <Navbar />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Home />
      </div>
    </div>
  );
}
