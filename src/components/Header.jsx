import { User, Heart, ShoppingBag, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b shadow-sm">
      <Link to="/" className="flex items-center space-x-1 text-gray-700">
        <div className="flex items-center space-x-4 p-3">
          <h1 className="text-4xl font-bold text-blue-600">RIVERISLAND</h1>
        </div>
      </Link>

      <div className="flex items-center space-x-9">
        <div className="relative group">
          <div className="flex items-center text-gray-700 hover:text-blue-500 space-x-1 cursor-pointer">
            <span>Products</span>
            <ChevronDown size={18} />
          </div>

          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 z-50"
            onMouseEnter={(e) => e.currentTarget.classList.add('opacity-100', 'visible')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('opacity-100', 'visible')}>
            <Link to="/products/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
            <Link to="/products/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
            <Link to="/products/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
          </div>
        </div>

        <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
          <Search size={25} />
        </Link>
        <Link to="/account" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
          <User size={25} />
        </Link>
        <Link to="/wishlist" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
          <Heart size={25} />
        </Link>

        <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
          <ShoppingBag size={25} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
