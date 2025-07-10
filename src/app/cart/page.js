"use client";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCart(items);
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-rose-600 mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <p className="text-gray-500 text-center">Your cart is empty. Add some delicious food!</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <ul className="divide-y divide-gray-200">
            {cart.map(item => (
              <li key={item.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price} x {item.qty}</p>
                  </div>
                </div>
                <span className="font-bold text-lg text-rose-600">₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="font-semibold text-xl">Total:</span>
            <span className="font-bold text-2xl text-rose-600">₹{total}</span>
          </div>
        </div>
      )}
      <button className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-rose-700 transition" disabled={cart.length === 0}>Checkout</button>
    </main>
  );
} 