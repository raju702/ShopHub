import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/format';
import OptimizedImage from '../Image/OptimizedImage';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg mb-8" />
          <div className="h-8 bg-gray-200 w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 w-1/4 mb-8" />
          <div className="h-24 bg-gray-200 mb-8" />
          <div className="h-12 bg-gray-200 w-48" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 p-4 rounded-md">
          <div className="text-red-700">{error || 'Product not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              <span>{product.rating}</span>
              <Star className="h-4 w-4 ml-1 fill-current" />
            </div>
            <span className="ml-4 text-gray-500">In Stock: {product.stock}</span>
          </div>

          <p className="text-gray-600 mb-8">{product.description}</p>

          <div className="mb-8">
            <span className="text-3xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            onClick={() => addItem(product)}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}