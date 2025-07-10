"use client";
import { useState } from "react";
import FoodGrid from "../components/FoodGrid";

const allFoods = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 299,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Veg Burger",
    price: 149,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: 249,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Paneer Tikka",
    price: 199,
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
  },
  {
    id: 5,
    name: "French Fries",
    price: 99,
    image: "https://goldenfingers.us/wp-content/uploads/2020/03/french_fry.jpg",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    price: 129,
    image: "https://th.bing.com/th/id/OIP.veC8Vfj_FBLQE8oExn3QywHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const filteredFoods = allFoods.filter(food =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-rose-600 mb-6">Search Food</h1>
      <input
        type="text"
        placeholder="Search for dishes..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-8"
      />
      {filteredFoods.length > 0 ? (
        <FoodGrid foods={filteredFoods} hideTopRestaurants />
      ) : (
        <div className="text-gray-500 text-center mt-8">No results found for "{query}"</div>
      )}
    </main>
  );
} 