"use client";

import { useState } from "react";

const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "appetizers", name: "Appetizers" },
  { id: "main", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

const menuItems = [
  // Appetizers
  {
    id: 1,
    name: "Bruschetta",
    description: "Toasted bread with fresh tomatoes, basil, and olive oil",
    price: 12.99,
    category: "appetizers",
    image: "/images/menu/bruschetta.jpg",
  },
  {
    id: 2,
    name: "Calamari",
    description: "Crispy fried squid rings served with marinara sauce",
    price: 15.99,
    category: "appetizers",
    image: "/images/menu/calamari.jpg",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with parmesan and croutons",
    price: 11.99,
    category: "appetizers",
    image: "/images/menu/caesar-salad.jpg",
  },
  // Main Course
  {
    id: 4,
    name: "Signature Steak",
    description: "Premium cut steak cooked to perfection with seasonal vegetables",
    price: 45.99,
    category: "main",
    image: "/images/menu/steak.jpg",
  },
  {
    id: 5,
    name: "Fresh Seafood Platter",
    description: "A selection of the finest fresh seafood from local waters",
    price: 52.99,
    category: "main",
    image: "/images/menu/seafood.jpg",
  },
  {
    id: 6,
    name: "Chef's Special Pasta",
    description: "Handmade pasta with our secret family recipe sauce",
    price: 32.99,
    category: "main",
    image: "/images/menu/pasta.jpg",
  },
  {
    id: 7,
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon butter sauce and asparagus",
    price: 38.99,
    category: "main",
    image: "/images/menu/salmon.jpg",
  },
  {
    id: 8,
    name: "Chicken Parmesan",
    description: "Breaded chicken breast with marinara and melted mozzarella",
    price: 28.99,
    category: "main",
    image: "/images/menu/chicken-parm.jpg",
  },
  // Desserts
  {
    id: 9,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers",
    price: 9.99,
    category: "desserts",
    image: "/images/menu/tiramisu.jpg",
  },
  {
    id: 10,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center and vanilla ice cream",
    price: 11.99,
    category: "desserts",
    image: "/images/menu/lava-cake.jpg",
  },
  {
    id: 11,
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 10.99,
    category: "desserts",
    image: "/images/menu/cheesecake.jpg",
  },
  // Beverages
  {
    id: 12,
    name: "House Wine",
    description: "Selection of red or white wine by the glass",
    price: 12.99,
    category: "beverages",
    image: "/images/menu/wine.jpg",
  },
  {
    id: 13,
    name: "Craft Cocktails",
    description: "Ask your server about our signature cocktails",
    price: 14.99,
    category: "beverages",
    image: "/images/menu/cocktails.jpg",
  },
  {
    id: 14,
    name: "Fresh Juices",
    description: "Orange, apple, or cranberry juice",
    price: 5.99,
    category: "beverages",
    image: "/images/menu/juice.jpg",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Menu</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.name} Image
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <span className="text-orange-500 font-bold text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Special Note */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Dietary Requirements?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please inform our staff of any allergies or dietary restrictions. 
            We're happy to accommodate your needs.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            * Prices subject to change. Please ask your server about daily specials.
          </p>
        </div>
      </section>
    </div>
  );
}
