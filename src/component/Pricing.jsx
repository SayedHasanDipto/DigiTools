import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ pricingPromise }) => {
    const data = use(pricingPromise);
    return (
        <div className='max-w-7xl max-lg:py-20 mx-auto'>
            <div className='max-sm:mt-6 min-h-screen flex items-center justify-center flex-col mx-auto'>
                <div className='mb-10 text-center'>
                    <h1 className='text-5xl max-sm:text-3xl font-extrabold text-[#101727] max-sm:mb-2 max-sm:leading-10 mb-4'>Simple, Transparent Pricing</h1>
                    <p className='leading-5 text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='mt-6 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8'>
                    {
                        data.map(datas => <PricingCard key={datas.id} datas={datas}></PricingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;