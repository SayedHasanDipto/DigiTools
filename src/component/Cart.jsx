import React from 'react';
import CartCards from './CartCards';

const Cart = ({ carts, handleRemoveFromCart }) => {
    // console.log(carts);
    const totalPrice = carts.reduce((total, item) => total + item.price.amount, 0);
    console.log("Cart Data inside Component:", carts)
    return (
        <div className='mx-auto bg-[#F9FAFC]'>
            <div className='bg-base-100 p-10 w-304 mx-auto rounded-2xl'>
                <h1 className='text-2xl font-bold text-[#101727] mb-6'>Your Carts: {carts.length}</h1>
                <div className='cartData mb-12'>
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
                                        <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-soft btn-secondary rounded-full">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`flex justify-between items-center ${carts.length == 0 && 'hidden'}`}>
                    <h1 className='text-[#627382] font-bold'>Total:</h1>
                    <p className='text-2xl text-[#101727] font-bold'>${totalPrice}</p>
                </div>
            </div>
        </div >
    );
};

export default Cart;