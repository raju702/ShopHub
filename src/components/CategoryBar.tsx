import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Laptop, 
  Tv, 
  Headphones, 
  Camera, 
  Watch, 
  Shirt, 
  Home 
} from 'lucide-react';

const categories = [
  { id: '1', name: 'Electronics', slug: 'electronics', icon: <Smartphone className="h-6 w-6" /> },
  { id: '2', name: 'Laptops', slug: 'laptops', icon: <Laptop className="h-6 w-6" /> },
  { id: '3', name: 'TVs', slug: 'tvs', icon: <Tv className="h-6 w-6" /> },
  { id: '4', name: 'Audio', slug: 'audio', icon: <Headphones className="h-6 w-6" /> },
  { id: '5', name: 'Cameras', slug: 'cameras', icon: <Camera className="h-6 w-6" /> },
  { id: '6', name: 'Watches', slug: 'watches', icon: <Watch className="h-6 w-6" /> },
  { id: '7', name: 'Fashion', slug: 'fashion', icon: <Shirt className="h-6 w-6" /> },
  { id: '8', name: 'Home', slug: 'home', icon: <Home className="h-6 w-6" /> },
];

export default function CategoryBar() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center min-w-[80px] cursor-pointer hover:text-blue-600 transition-colors"
            >
              {category.icon}
              <span className="mt-1 text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}