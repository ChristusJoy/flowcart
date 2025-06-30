import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => setIsFav(!isFav);

  return (
    <div className="w-full transition-shadow duration-300 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
      <Link
        to={`/product/${product.id}`}
        className="block"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full object-contain bg-white border-b border-gray-200 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-blue-200 text-xs text-center py-2 uppercase tracking-wide">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-4 text-base space-y-3">
        <div className="flex items-start justify-between">
          <div className="relative max-w-[85%] overflow-hidden">
            <h2 className="font-semibold text-gray-800 text-sm leading-snug whitespace-nowrap overflow-hidden">
              <span className="block">{product.title}</span>
              <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-l from-white"></div>
            </h2>
          </div>
          <button
            onClick={toggleFav}
            className={`ml-3 transition-colors duration-300 ${
              isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
            }`}
            aria-label="Favorite"
          >
            <Heart size={20} fill={isFav ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-gray-900">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
