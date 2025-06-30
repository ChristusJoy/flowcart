import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Account = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen bg-gray-100">
                {/* Main content area grows to fill vertical space */}
                <main className="flex-grow flex justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg my-12">
                        <div className="flex justify-center mb-6 px-4">
                            <div className="flex flex-wrap justify-center bg-gray-900 rounded-xl shadow-lg w-full max-w-md overflow-hidden py-3 gap-4 sm:gap-8">
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className={`px-6 sm:px-10 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                                        isLogin
                                            ? 'bg-white text-gray-900 shadow-md'
                                            : 'text-white hover:bg-gray-700'
                                    }`}
                                >
                                    Log in
                                </button>
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className={`px-6 sm:px-10 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                                        !isLogin
                                            ? 'bg-white text-gray-900 shadow-md'
                                            : 'text-white hover:bg-gray-700'
                                    }`}
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>

                        <h2 className="text-center text-3xl font-bold text-gray-900">
                            {isLogin ? 'Log in to your account' : 'Create a new account'}
                        </h2>

                        <form className="mt-8 space-y-6">
                            {!isLogin && (
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                                    />
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-blue-200 hover:text-blue-200 hover:bg-gray-900 focus:outline-none"
                                >
                                    {isLogin ? 'Log In' : 'Sign Up'}
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Account;
