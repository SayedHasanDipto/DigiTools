import React from 'react';
import userImg from '../assets/user.png'
import rocketImg from '../assets/rocket.png'
import packageImg from '../assets/package.png'

const Begain = () => {
    return (
        <div className='min-h-screen flex-col gap-10 flex items-center justify-center bg-[#F9FAFC]'>
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='text-[#101727] font-extrabold text-5xl mb-4'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] leading-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex gap-8 mt-6'>
                <div className='w-95 h-95  flex items-center justify-center flex-col p-6'>
                    <div className="text-center flex flex-col justify-center items-center relative p-12">
                        <span className="badge badge-secondary absolute top-0 right-0">01</span>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-[#f430991c] mb-4 rounded-full w-20 h-20 flex items-center justify-center'>
                                <img src={userImg} alt="userImg" />
                            </div>
                            <h1 className='font-bold text-2xl text-[#101727] mb-4'>Create Account</h1>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>
                <div className='w-95 h-95  flex items-center justify-center flex-col p-6'>
                    <div className="text-center flex flex-col justify-center items-center relative p-12">
                        <span className="badge badge-secondary absolute top-0 right-0">01</span>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-[#f430991c] mb-4 rounded-full w-20 h-20 flex items-center justify-center'>
                                <img src={packageImg} alt="packageImg" />
                            </div>
                            <h1 className='font-bold text-2xl text-[#101727] mb-4'>Choose Products</h1>
                            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs..</p>
                        </div>
                    </div>
                </div>
                <div className='w-95 h-95  flex items-center justify-center flex-col p-6'>
                    <div className="text-center flex flex-col justify-center items-center relative p-12">
                        <span className="badge badge-secondary absolute top-0 right-0">01</span>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='bg-[#f430991c] mb-4 rounded-full w-20 h-20 flex items-center justify-center'>
                                <img src={rocketImg} alt="rocketImg" />
                            </div>
                            <h1 className='font-bold text-2xl text-[#101727] mb-4'>Start Creating</h1>
                            <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Begain;