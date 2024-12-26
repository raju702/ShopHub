import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import CartDrawer from './Cart/CartDrawer';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const { state } = useCart();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <nav className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
              <Link to="/" className="text-2xl font-bold">ShopHub</Link>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button 
                onClick={handleAuthClick}
                className="flex items-center space-x-1 hover:text-gray-200"
              >
                <User className="h-5 w-5" />
                <span className="hidden md:inline">
                  {user ? 'Logout' : 'Login'}
                </span>
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-1 hover:text-gray-200 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}