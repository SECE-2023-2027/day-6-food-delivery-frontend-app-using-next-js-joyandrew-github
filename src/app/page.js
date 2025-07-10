import FoodGrid from "./components/FoodGrid";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-rose-600 mb-4 drop-shadow-lg">Delicious Food, Delivered Fast</h1>
        <p className="text-lg text-gray-700 mb-6">Order from your favorite restaurants and get it delivered to your doorstep in minutes.</p>
        <a href="#menu" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-rose-700 transition">Order Now</a>
      </section>
      <section id="menu">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Dishes</h2>
        <FoodGrid />
      </section>
    </main>
  );
}
