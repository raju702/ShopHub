import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import OptimizedImage from '../Image/OptimizedImage';
import { formatPrice } from '../../utils/format';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addItem(product);
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <OptimizedImage
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
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
        <p className="mt-2 text-xl font-bold">{formatPrice(product.price)}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </Link>
  );
}