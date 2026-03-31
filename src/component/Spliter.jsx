import React from 'react';

const Spliter = () => {
    return (
        <div className='bg-[#f43098] py-14'>
            <div className='max-w-6xl max-sm:flex-col  max-sm:gap-4 flex justify-between items-center mx-auto'>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold mb-3 max-sm:text-5xl'>50K+</h1>
                    <p className='max-sm:text-xl text-2xl font-medium '>Active Users</p>
                </div>
                <div className="divider divider-horizontal before:bg-white after:bg-white max-sm:divider-vertical"></div>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold mb-3 max-sm:text-5xl'>200+</h1>
                    <p className='max-sm:text-xl text-2xl font-medium'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal before:bg-white after:bg-white max-sm:divider-vertical"></div>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold mb-3 max-sm:text-5xl'>4.9</h1>
                    <p className='max-sm:text-xl text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Spliter;

