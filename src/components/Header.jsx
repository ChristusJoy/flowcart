import { User, Heart, ShoppingCart, AudioWaveform } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b shadow-sm">
      <Link to="/" className="flex items-center space-x-1 text-gray-700">
        <div className="flex items-center space-x-4 p-3">
          <AudioWaveform size={50} />
          <h1 className="text-2xl font-bold text-blue-600">FlowCart</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/account" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
          <User size={20} />
          <span className="hidden sm:inline">Account</span>
        </Link>

        <Link to="/wishlist" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
          <Heart size={20} />
          <span className="hidden sm:inline">Wishlist</span>
        </Link>

        <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
          <ShoppingCart size={20} />
          <span className="hidden sm:inline">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
