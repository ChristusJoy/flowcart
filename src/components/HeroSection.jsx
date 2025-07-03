import { ShoppingCart } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="w-full bg-white py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Discover Unique Products
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-8">
                        Shop hand-picked items with trusted quality and stylish designs. Find something special today.
                    </p>
                    <button
                        onClick={() => {
                            const section = document.getElementById('products');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-gray-900 text-white px-6 py-3 rounded-md text-sm md:text-base transition-colors duration-300 hover:bg-gray-800"
                    >
                        Shop Now
                    </button>

                </div>

                <div className="flex-1">
                    <ShoppingCart
                        className="w-full h-auto max-w-md mx-auto object-contain text-black-900"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
