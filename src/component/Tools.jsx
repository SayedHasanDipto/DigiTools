import React, { use } from 'react';
import ToolsCard from './ToolsCard';
import { useState } from 'react';

const Tools = ({ toolsPrice, carts, setCarts }) => {
    // console.log(carts);
    // console.log(toolsPrice);
    const data = use(toolsPrice);
    // console.log(data);

    // count hoitase
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className='min-h-screen flex-col gap-10 flex items-center max-sm:mt-12 justify-center bg-[#F9FAFC]'>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8'>
                {
                    data.map(datas => <ToolsCard carts={carts} setCarts={setCarts} key={datas.id} datas={datas} handleAddToCart={handleAddToCart}></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;