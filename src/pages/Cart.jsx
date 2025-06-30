import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=4")
            .then(res => {
                const formatted = res.data.map(item => ({
                    ...item,
                    quantity: 1
                }));
                setCartItems(formatted);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const updateQuantity = (id, delta) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = id => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow">
                <div className="max-w-6xl mx-auto p-6">
                    <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>
                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20 text-lg">
                            Your cart is currently empty.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                {cartItems.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border p-4 rounded-xl shadow-sm bg-white"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-16 h-16 object-contain"
                                            />
                                            <div className="max-w-xs">
                                                <h2 className="font-semibold text-gray-800 truncate">{item.title}</h2>
                                                <p className="text-sm text-gray-500">{item.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-2">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="p-1 hover:bg-gray-200 rounded"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <div className="w-20 text-right font-medium text-gray-700">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                        <button onClick={() => removeItem(item.id)}>
                                            <Trash2 size={18} className="text-red-500 hover:text-red-700" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="border rounded-xl p-6 shadow-md bg-white h-fit">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg border-t pt-4">
                                    <span>Total</span>
                                    <span>${subtotal}</span>
                                </div>
                                <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;
