import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <img src={product.image} className="w-full h-64 object-contain" alt={product.title} />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
