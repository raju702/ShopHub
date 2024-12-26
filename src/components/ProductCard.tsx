import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <div className="flex items-center mt-1">
          <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
            <span>{product.rating}</span>
            <Star className="h-3 w-3 ml-1 fill-current" />
          </div>
        </div>
        <p className="mt-2 text-xl font-bold">₹{product.price.toLocaleString()}</p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}