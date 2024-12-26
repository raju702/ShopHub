import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import ProductList from './components/ProductList/ProductList';
import CategoryPage from './components/CategoryPage';
import LoginForm from './components/LoginForm';
import ProductDetail from './components/Product/ProductDetail';
import CheckoutForm from './components/Checkout/CheckoutForm';
import CheckoutSuccess from './components/Checkout/CheckoutSuccess';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <CategoryBar />
      
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
      </Routes>
    </div>
  );
}