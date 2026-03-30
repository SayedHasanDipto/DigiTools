import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
    return (
        <div className='border-b pb-4 border-gray-200 shadow'>
            <div className='container mx-auto mt-6'>
                <div className="navbar">
                    <div className="navbar-start">
                        <a href="" className='text-3xl font-bold text-[#f43098]'>DigiTools</a>
                    </div>
                    <div className="navbar-center">
                        <ul className='flex items-center justify-center gap-8 text-lg'>
                            <li><a href="/Products" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Products</a></li>
                            <li><a href="Features" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Features</a></li>
                            <li><a href="/Pricing" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Pricing</a></li>
                            <li><a href="/Testimonials" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>Testimonials</a></li>
                            <li><a href="/FAQ" className='font-semibold btn btn-secondary text-black hover:text-white btn-ghost'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <button className='hover:bg-[#f43098] duration-150 ease-in hover:text-white w-8 scale-125 flex items-center justify-center rounded-full h-8'><FiShoppingCart /></button>
                        <button className='font-semibold font-lg btn btn-secondary text-black hover:text-white btn-ghost rounded-full'>Login</button>
                        <button className='font-semibold text-white font-lg btn rounded-full btn-secondary'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;