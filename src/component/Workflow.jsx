import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-[rgb(255,84,175)] py-32'>
            <div className='text-center mb-10 text-white'>
                <h1 className='text-4xl font-extrabold mb-4'>Ready to Transform Your Workflow?</h1>
                <p className='leading-6'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='text-center'>
                <div className='mb-4 flex gap-4 justify-center items-center'>
                    <button className='btn text-[rgb(255,84,175,175)] rounded-full'>Explore Products</button>
                    <button className='btn btn-outline text-white rounded-full hover:text-[rgb(255,84,175,175)]'>View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;