import React, { use } from 'react';
import ToolsCard from './ToolsCard';
import { useState } from 'react';

const Tools = ({ toolsPrice, setActiveTab }) => {
    // console.log(toolsPrice);
    const data = use(toolsPrice);
    // console.log(data);

    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className='min-h-screen pt-50 flex-col gap-10 flex items-center max-sm:mt-12 justify-center bg-[#F9FAFC]'>
            <div className='space-y-4 text-center'>
                <h1 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382] w-136 max-sm:w-96 mx-auto leading-6'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex w-60 h-14 mx-auto justify-around items-center gap-4 bg-base-300 rounded-full'>
                    <button className='font-semibold text-white font-lg btn rounded-full btn-secondary h-11'>Products</button>

                </div>
                <div className="tabs tabs-box justify-center bg-transparent gap-2">
                    <input onClick={() => setActiveTab("tool")} type="radio" name="my_tabs_1" className="tab font-semibold rounded-full w-24" aria-label="Products" defaultChecked />
                    <input onClick={() => setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab font-semibold rounded-full w-24" aria-label={`Cart (${cartCount})`} />
                </div>
            </div>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-8'>
                {
                    data.map(datas => <ToolsCard key={datas.id} datas={datas} handleAddToCart={handleAddToCart}></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;