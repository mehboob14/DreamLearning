import Hcard from "./Hcard";

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
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Hcard key={index} title={item.title} image={item.image} units={item.units} />
        ))}
      </div>
    </div>
  );
}
