"use client";
import { useState, useRef } from "react";

const topRestaurants = [
  {
    name: "Barbeque Nation",
    image: "https://tse4.mm.bing.net/th/id/OIP.ms5vaCORImkyQ1hRUfS9WQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Domino's Pizza",
    image: "https://wallpapers.com/images/hd/pacific-veggie-dominos-pizza-mywuwotiaoda3z06.jpg",
  },
  {
    name: "KFC",
    image: "https://tse1.mm.bing.net/th/id/OIP.f6gI5N7eFMWWTAVa0fuYcwHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Pizza Hut",
    image: "https://tse1.mm.bing.net/th/id/OIP.7a0iWCKJhdKJV5VsehJj4gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Burger King",
    image: "https://e1.pxfuel.com/desktop-wallpaper/294/457/desktop-wallpaper-burger-king.jpg",
  },
  {
    name: "Haldiram's",
    image: "https://lifebeyondnumbers.b-cdn.net/wp-content/uploads/2023/12/haldiramji.jpg",
  },
  {
    name: "Bikanervala",
    image: "https://im.whatshot.in/img/2018/Mar/shutterstock-163056662-1521025701.jpg",
  },
  {
    name: "Subway",
    image: "https://media.timeout.com/images/105756546/750/562/image.jpg",
  },
  {
    name: "Wow! Momo",
    image: "https://i.pinimg.com/originals/84/be/19/84be197fc1161eed5b3302dc6f2289ec.jpg",
  },
  {
    name: "Theobroma",
    image: "https://www.bakingo.com/blog/wp-content/uploads/2023/08/Theobroma.jpg",
  },
  {
    name: "La Pino'z Pizza",
    image: "https://tse2.mm.bing.net/th/id/OIP.w0hwTVr9sh1G13rJLosw-AHaEv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Chinese Wok",
    image: "https://tb-static.uber.com/prod/image-proc/processed_images/563ba87c8744651a988dff0a1af7dae2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
  },
];
const foods = [
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

export default function FoodGrid({ foods: customFoods, hideTopRestaurants }) {
  const foodsToShow = customFoods || foods;
  const [message, setMessage] = useState("");
  const [quantities, setQuantities] = useState(() => Object.fromEntries(foodsToShow.map(f => [f.id, 1])));
  const scrollRef = useRef(null);

  const handleDecrement = (id) => {
    setQuantities(q => ({ ...q, [id]: Math.max(1, q[id] - 1) }));
  };

  const handleIncrement = (id) => {
    setQuantities(q => ({ ...q, [id]: q[id] + 1 }));
  };

  const handleAddToCart = (food) => {
    if (typeof window !== "undefined") {
      let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const qtyToAdd = quantities[food.id] || 1;
      const existing = cart.find(item => item.id === food.id);
      if (existing) {
        existing.qty += qtyToAdd;
      } else {
        cart.push({ ...food, qty: qtyToAdd });
      }
      localStorage.setItem("cartItems", JSON.stringify(cart));
      setMessage(`${qtyToAdd} x ${food.name} added to cart!`);
      setQuantities(q => ({ ...q, [food.id]: 1 }));
      setTimeout(() => setMessage(""), 1500);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = 200;
      if (direction === "left") {
        scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {!hideTopRestaurants && (
        <section className="mb-10 relative">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Top restaurant in India</h2>
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100 transition" aria-label="Scroll left">
            &#8592;
          </button>
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-2 hide-scrollbar scroll-smooth">
            {topRestaurants.map((rest, idx) => (
              <div key={idx} className="min-w-[160px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0">
                <img src={rest.image} alt={rest.name} className="w-full h-24 object-cover rounded-t-lg" />
                <div className="p-2 text-center">
                  <span className="font-medium text-gray-900 text-sm">{rest.name}</span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100 transition" aria-label="Scroll right">
            &#8594;
          </button>
        </section>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foodsToShow.map(food => (
          <div key={food.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{food.name}</h3>
              <p className="text-rose-600 font-bold text-xl mb-2">₹{food.price}</p>
              <div className="flex items-center mb-2 gap-2">
                <button onClick={() => handleDecrement(food.id)} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300 transition" aria-label="Decrease quantity">-</button>
                <span className="w-8 text-center select-none font-semibold text-gray-800">{quantities[food.id]}</span>
                <button onClick={() => handleIncrement(food.id)} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300 transition" aria-label="Increase quantity">+</button>
              </div>
              <button onClick={() => handleAddToCart(food)} className="bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition">Add to Cart</button>
            </div>
          </div>
        ))}
        {message && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
            {message}
          </div>
        )}
      </div>
    </>
  );
} 