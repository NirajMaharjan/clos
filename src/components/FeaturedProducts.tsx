
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Essential Cotton Shirt",
    price: "$89",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 2,
    name: "Minimalist Blazer",
    price: "$189",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
  },
  {
    id: 3,
    name: "Classic Trousers",
    price: "$120",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 4,
    name: "Wool Blend Coat",
    price: "$299",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Featured Collection</h2>
          <p className="text-gray-600">Curated pieces for your wardrobe</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer animate-fade-up"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-light">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
