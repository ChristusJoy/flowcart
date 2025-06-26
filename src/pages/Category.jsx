// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${encodeURIComponent(categoryName)}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [categoryName]);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-2 py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
