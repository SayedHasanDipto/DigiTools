import React from 'react';
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = ({ carts }) => {
    return (
        <div className='border-b border-gray-200 shadow-md manrope'>
            <div className='max-w-7xl max-lg:w-220 mx-auto my-2'>
                <div className="navbar max-lg:w-220">
                    <div className="navbar-start">
                        <a href="" className='text-3xl max-sm:text-xl font-bold text-[#f43098]'>DigiTools</a>
                    </div>
                    <div className="navbar-center">
                        <ul className='hidden lg:flex items-center justify-center gap-8 text-lg'>
                            <li><a href="/Products" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Products</a></li>
                            <li><a href="Features" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Features</a></li>
                            <li><a href="/Pricing" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Pricing</a></li>
                            <li><a href="/Testimonials" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Testimonials</a></li>
                            <li><a href="/FAQ" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-4 max-sm:gap-4">
                        <button className="relative flex items-center justify-center p-2">
                            <FiShoppingCart className="text-2xl" />
                            {carts.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#f43098] text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-4.5 h-4.5">
                                    {carts.length}
                                </span>
                            )}
                        </button>
                        <button className='font-semibold font-lg btn btn-secondary text-black hover:text-white btn-ghost rounded-full h-10'>Login</button>
                        <button className='font-semibold text-white font-lg btn rounded-full btn-secondary h-10'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;