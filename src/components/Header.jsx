import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { X, Ellipsis, ChevronDown, User, Heart, ShoppingBag, } from "lucide-react"
import { Link } from 'react-router-dom'
const navigation = [
  { name: 'Account', href: '/account', logo: <User size={17} /> },
  { name: 'Wishlist', href: '/wishlist', logo: <Heart size={17} /> },
  { name: 'Cart', href: '/cart', logo: <ShoppingBag size={17} /> },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 py-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Ellipsis aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <X aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="text-4xl md:text-7xl font-bold text-blue-200 ">FlowCart</Link>
            <div className="hidden sm:flex sm:ml-auto">
              <div className="flex space-x-4">
                <div className="relative group flex rounded-md px-3 py-2">
                  <div className={classNames(
                    'text-xl text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 text-sm font-medium flex items-center',
                  )}>
                    <span>Products</span>
                    <ChevronDown size={18} />
                  </div>
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 z-50"
                    onMouseEnter={(e) => e.currentTarget.classList.add('opacity-100', 'visible')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('opacity-100', 'visible')}>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">All Products</Link>
                    <Link to="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
                    <Link to="/category/jewelery" className="block px-4 py-2 hover:bg-gray-100">Jewelery</Link>
                    <Link to="/category/men's clothing" className="block px-4 py-2 hover:bg-gray-100">Men's Clothing</Link>
                    <Link to="/category/women's clothing" className="block px-4 py-2 hover:bg-gray-100">Women's Clothing</Link>
                  </div>
                </div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      'text-xl text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium flex items-center',
                    )}
                  >
                    {item.logo && (
                      <span className="mr-2">
                        {item.logo}
                      </span>
                    )}
                    {item.name}

                  </a>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
