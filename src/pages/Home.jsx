import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error('Error loading products:', err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <HeroSection />
            <main id="products" className="flex-grow">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                        Featured Products
                    </h1>

                    {loading ? (
                        <div className="text-center text-gray-500 text-lg">Loading products...</div>
                    ) : products.length === 0 ? (
                        <div className="text-center text-gray-500 text-lg">No products found.</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
