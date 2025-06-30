import { Link } from 'react-router-dom'
import { User, Heart, ShoppingBag } from "lucide-react"

const footerNavigation = [
  { name: 'Account', href: '/account', icon: <User size={17} /> },
  { name: 'Wishlist', href: '/wishlist', icon: <Heart size={17} /> },
  { name: 'Cart', href: '/cart', icon: <ShoppingBag size={17} /> },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <Link to="/" className="text-3xl font-bold text-blue-200">
            FlowCart
          </Link>

          <div className="flex space-x-6">
            {footerNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center text-sm hover:text-white transition"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} FlowCart. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
