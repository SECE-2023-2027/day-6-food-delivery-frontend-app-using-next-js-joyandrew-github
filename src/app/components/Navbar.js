"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-rose-600 tracking-tight"> FoodHaven</span>
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-rose-600 font-medium transition">Home</Link>
          <Link href="/help" className="text-gray-700 hover:text-rose-600 font-medium transition">Help</Link>
          <Link href="/search" className="text-gray-700 hover:text-rose-600 font-medium transition">Search</Link>
          <Link href="/cart" className="text-gray-700 hover:text-rose-600 font-medium transition">Cart</Link>
        </div>
      </div>
    </nav>
  );
} 