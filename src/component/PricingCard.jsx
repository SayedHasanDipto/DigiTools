import React from 'react';

const PricingCard = ({ datas }) => {
    // console.log(datas);
    return (
        <div>
            <div className={`card rounded-2xl shadow-sm relative ${datas.isPopular ? 'bg-[rgb(255,84,175)] text-white' : 'bg-[#00000007]'
                }`}>
                <div className="card-body flex h-120 w-95">
                    {datas.isPopular && < span className="badge absolute left-1/2 -translate-x-1/2 -top-5 badge-xl rounded-full  badge-accent">Most Popular</span>}
                    <div>
                        <h2 className="text-3xl font-bold text0[#101727]">{datas.planName}</h2>
                        <p className={`${datas.isPopular ? 'text-white' : 'leading-5 text-[#627382]'}`}  >{datas.tagline}</p>
                    </div>
                    <div className='mt-6'>
                        <h1 className={`${datas.isPopular ? 'text-white text-4xl font-bold' : 'text-[#101727] text-4xl font-bold'}`}>
                            {datas.currency}
                            {datas.price}
                            /
                            <span className={`${datas.isPopular ? 'text-white' : 'text-[#627382] text-xl'}`}>
                                {datas.billing}
                            </span>
                        </h1>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-base grow">
                        {
                            datas.features.map((features, index) => <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{features}</span>
                            </li>)
                        }
                    </ul>
                    <div className="mt-6">
                        <button className={`btn ${datas.isPopular ? 'btn' : 'btn-secondary'} rounded-full btn-block h-13 w-full`}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PricingCard;