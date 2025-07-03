import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Trash2 } from "lucide-react";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6")
            .then(res => {
                setWishlistItems(res.data);
            })
            .catch(error => console.error("Error fetching wishlist items:", error));
    }, []);

    const removeFromWishlist = (id) => {
        setWishlistItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                        Your Wishlist
                    </h1>

                    {wishlistItems.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20 text-lg">
                            Your wishlist is currently empty.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {wishlistItems.map(item => (
                                <div key={item.id} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm flex flex-col">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-40 object-contain mb-4"
                                    />
                                    <h2 className="font-semibold text-gray-800 line-clamp-2 mb-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                                    <div className="flex items-center justify-between mt-auto pt-4">
                                        <span className="text-lg font-bold text-green-600">${item.price}</span>
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                            title="Remove"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Wishlist;
