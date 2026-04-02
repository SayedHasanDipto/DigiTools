import React from 'react';
import CartCards from './CartCards';

const Cart = ({ carts }) => {
    // console.log(carts);
    console.log("Cart Data inside Component:", carts)
    return (
        <div className='mx-auto bg-[#F9FAFC]'>
            <div className='bg-base-100 p-10 w-304 mx-auto rounded-2xl'>
                <h1 className='text-2xl font-bold texxt-[#101727] mb-6'>Your Carts: {carts.length}</h1>
                <div className='cartData'>
                    <div className='space-y-4'>
                        {carts.map((item) => (
                            <div key={item.id} className="rounded-2xl p-4 bg-[#0000000a] h-24 flex flex-col justify-center">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='mb-2 text-xl text-[#101727] font-semibold'>{item.title}</h2>
                                            <p className='leading-5 text-[#627382}'>${item.price.amount}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-soft btn-secondary rounded-full">Remove</button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;