import { useState } from "react";
import Hcard from "../components/Hcard";

const data = [
  {
    title: "Mango",
    image: "https://via.placeholder.com/150",
    units: ["Unit 1: Vitamin C", "Unit 2: Fiber", "Unit 3: Natural Sugar"],
  },
  {
    title: "Apple",
    image: "https://via.placeholder.com/150",
    units: ["Unit 1: Antioxidants", "Unit 2: Fiber", "Unit 3: Low Calories"],
  },
  {
    title: "Banana",
    image: "https://via.placeholder.com/150",
    units: ["Unit 1: Potassium", "Unit 2: Energy Booster", "Unit 3: Vitamin B6"],
  },
  {
    title: "Grapes",
    image: "https://via.placeholder.com/150",
    units: ["Unit 1: Polyphenols", "Unit 2: Vitamin K", "Unit 3: Antioxidants"],
  },
  {
    title: "Orange",
    image: "https://via.placeholder.com/150",
    units: ["Unit 1: Vitamin C", "Unit 2: Hydration", "Unit 3: Fiber"],
  },
];


export default function Home() {
    const [mobileview, setMobileview] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-start">
        {data.map((item, index) => (
          <Hcard key={index} title={item.title} image={item.image} units={item.units} />
        ))}
      </div>
    </div>
  );
}
