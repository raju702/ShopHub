import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ProductCard from './ProductCard/ProductCard';
import ProductListSkeleton from './ProductList/ProductListSkeleton';
import { Product } from '../types';

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    async function fetchCategoryProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*, categories!inner(*)')
          .eq('categories.slug', category)
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (mounted) {
          setProducts(data || []);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch products');
          console.error('Error:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchCategoryProducts();

    return () => {
      mounted = false;
    };
  }, [category]);

  if (loading) {
    return <ProductListSkeleton />;
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 p-4 rounded-md">
          <div className="text-red-700">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category?.replace('-', ' ')} Products
      </h2>
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}