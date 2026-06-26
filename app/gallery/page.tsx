"use client";

import { useState } from "react";

const galleryImages = [
  { id: 1, category: "interior", title: "Main Dining Area", src: "/images/gallery/interior-1.jpg" },
  { id: 2, category: "interior", title: "Private Room", src: "/images/gallery/interior-2.jpg" },
  { id: 3, category: "interior", title: "Bar Area", src: "/images/gallery/interior-3.jpg" },
  { id: 4, category: "food", title: "Signature Dish", src: "/images/gallery/food-1.jpg" },
  { id: 5, category: "food", title: "Seafood Platter", src: "/images/gallery/food-2.jpg" },
  { id: 6, category: "food", title: "Dessert Presentation", src: "/images/gallery/food-3.jpg" },
  { id: 7, category: "food", title: "Chef's Special", src: "/images/gallery/food-4.jpg" },
  { id: 8, category: "events", title: "Birthday Celebration", src: "/images/gallery/event-1.jpg" },
  { id: 9, category: "events", title: "Anniversary Dinner", src: "/images/gallery/event-2.jpg" },
  { id: 10, category: "events", title: "Corporate Event", src: "/images/gallery/event-3.jpg" },
  { id: 11, category: "chefs", title: "Executive Chef", src: "/images/chefs/chef-1.jpg" },
  { id: 12, category: "chefs", title: "Kitchen Team", src: "/images/chefs/chef-2.jpg" },
];

const categories = [
  { id: "all", name: "All Photos" },
  { id: "interior", name: "Interior" },
  { id: "food", name: "Food" },
  { id: "events", name: "Events" },
  { id: "chefs", name: "Chefs" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A glimpse into our restaurant's ambiance, cuisine, and memorable moments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
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

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm text-center p-2">
                    {image.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                  <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-orange-500 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gray-300 dark:bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">
                {galleryImages.find(img => img.id === selectedImage)?.title} - Full Size Image
              </span>
            </div>
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages.find(img => img.id === selectedImage)?.title}
            </p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Visit us in person to experience the full ambiance of our restaurant
          </p>
          <a
            href="/reservation"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book a Table Now
          </a>
        </div>
      </section>
    </div>
  );
}
