import React from 'react';
import CartCards from './CartCards';

const Cart = ({ carts }) => {
    // console.log(carts);
    console.log("Cart Data inside Component:", carts)
    return (
        <div>
            <div className='bg-red-400 p-10'>
                <h1 className='text-2xl font-bold'>Your Carts: {carts.length}</h1>
                {/* {
                    carts.map(cartData => <CartCards key={cartData.id} cartData={cartData} />)
                } */}


                <div className='cartData'>
                    {carts.map((item) => (
                        <div key={item.id} className="border p-4 mb-2">
                            <h2>{item.title}</h2>
                            <p>Price: ${item.price.amount}</p> {/* শুধু item.price দিলে কাজ করবে না */}
                            <p>{item.description}</p>
                            <ul>
                                {item.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;