import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <img src={product.image} alt={product.title} className="h-48 mx-auto object-contain" />
    <h2 className="text-lg font-semibold mt-2">{product.title.slice(0, 30)}...</h2>
    <p className="text-gray-600">${product.price}</p>
    <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View</Link>
  </div>
);

export default ProductCard;
