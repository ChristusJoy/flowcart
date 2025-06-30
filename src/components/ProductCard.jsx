import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => setIsFav(!isFav);

  return (
    <div className="w-full">
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 text-sm ml-2"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full object-contain bg-white border border-gray-200"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gray-900 text-blue-200 text-sm text-center py-1.5 uppercase">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="mt-3 text-base space-y-2">
        <div className="flex items-start justify-between">
          <div className="relative max-w-[85%] overflow-hidden">
            <h2 className="font-medium whitespace-nowrap overflow-hidden">
              <span className="block">{product.title}</span>
              <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-white"></div>
            </h2>
          </div>
          <button
            onClick={toggleFav}
            className={`ml-3 ${isFav ? 'text-red-500' : 'text-gray-400'}`}
            aria-label="Favorite"
          >
            <Heart size={20} fill={isFav ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
