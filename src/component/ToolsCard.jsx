import React, { useState } from 'react';
import writing from '../assets/products/writing_2327400 1.png'

const ToolsCard = ({ datas, handleAddToCart }) => {
    console.log(datas);

    const [isBtnTrue, setIsBtnTrue] = useState(false);

    const handleClick = () => {
        setIsBtnTrue(true);
        handleAddToCart();
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm rounded-2xl">
                <div className='card-body space-y-4'>
                    <div className="relative">
                        <span className="badge badge-xs badge-warning absolute top-0 right-0">{datas.tag}</span>
                        <div className='my-4'>
                            <img src={
                                writing
                            } alt="" />
                        </div>
                        <div className="flex justify-between flex-col space-y-3">
                            <h2 className="text-2xl font-bold">{datas.title}</h2>
                            <p className='text-[#627382]'>{datas.description}</p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold">${datas.price.amount}</span>
                            <span className='text-[#627382]'>{datas.price.type}</span>
                        </div>
                        <ul className="flex flex-col gap-2 text-xs">
                            {
                                datas.features.map(features => <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{features}</span>
                                </li>)
                            }
                        </ul>
                        <div className="mt-6">
                            <button
                                onClick={handleClick} className={`btn rounded-full btn-block ${isBtnTrue ? 'btn-success' : 'btn-secondary'}`}
                            >
                                {isBtnTrue ? "Added to cart" : "Buy Now"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;