import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => setIsFav(!isFav);
  return (
    <div className="w-64 flex-shrink-0 mx-2">
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 text-xs ml-2"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 w-full object-contain bg-white border border-gray-200"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black text-white text-xs text-center py-1 uppercase">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="mt-2 text-sm space-y-1">
        <div className="flex items-start justify-between">
          <div className="relative max-w-[85%] overflow-hidden">
            <h2 className="font-medium text-sm whitespace-nowrap overflow-hidden">
              <span className="block">{product.title}</span>
              <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-l from-white"></div>
            </h2>
          </div>
          <button
            onClick={toggleFav}
            className={`text-sm ml-2 ${isFav ? 'text-red-500' : 'text-gray-400'}`}
            aria-label="Favorite"
          >
            <Heart size={16} fill={isFav ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">$ {product.price}</p>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
