import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <header className="bg-gray-900 py-4 lg:py-6">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <Link to="/">
                            <p className='text-white'>Motorik FC</p>
                            {/* <img src="/logo.svg" alt="Soccer Team logo" className="h-8" /> */}
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav className="flex items-center">
                            <Link to="/" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Home
                            </Link>
                            <Link to="/about" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                About
                            </Link>

                            <div className="relative">
                                <button className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Teams
                                </button>
                                <ul className="absolute hidden w-48 pt-2 bg-gray-900 rounded-md shadow-xl">
                                    <li>
                                        <Link to="/teams/u23" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md">
                                        U23 Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/teams/womens" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md">
                                        Women's Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/teams/tryouts" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md">
                                        Tryout Info
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/shop" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Shop
                            </Link>
                            <Link to="/contact" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="block md:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                            <GiHamburgerMenu />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )}

  export default Navbar;
