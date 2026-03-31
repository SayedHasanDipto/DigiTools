import React from 'react';
import circleImg from '../assets/logo.png';
import './HeroSection.css';
import heroImg from '../assets/banner.png'
import { CiPlay1 } from "react-icons/ci";



const HeroSection = () => {
    return (
        <div className="hero max-w-7xl mx-auto flex justify-between items-center min-h-0 lg:min-h-screen h-auto py-20 lg:py-0 manrope">
            <div>
                <button className='mb-2 py-0 px-0 rounded-full animate-bounce max-sm:ml-8'>
                    <div className='flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#E1E7FF]'>
                        <img src={circleImg} alt="circleImg" className='animate-pulse' />
                        <h1 className='color font-medium'>New: AI-Powered Tools Available</h1>
                    </div>
                </button>
                <h1 className='text-7xl max-sm:text-xl max-sm:text-[3rem] max-sm:w-100 max-sm:text-center font-extrabold text-[#101727] w-2xl leading-20 mb-4'>Supercharge Your Digital Workflow</h1>
                <p className='text-lg w-lg leading-8 max-sm:w-88 max-sm:mx-auto max-sm:text-lg'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today. Explore Products
                </p>
                <div className='mt-8 gap-4 flex items-center max-sm:justify-center'>
                    <button className='font-semibold text-white font-lg btn rounded-full btn-secondary h-12'>Explore Products</button>
                    <button className='font-semibold font-lg h-12 btn btn-secondary btn-outline rounded-full hover:text-white flex gap-2 items-center'><CiPlay1 className='scale-125' /> Watch Demo</button>
                </div>
            </div>
            <div className='max-md:hidden'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;