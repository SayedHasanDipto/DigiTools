import React from 'react';

const ToolsHeader = (setActiveTab) => {


    return (
        <div className='min-h-screen pt-50 flex-col gap-10 flex items-center max-sm:mt-12 justify-center bg-[#F9FAFC]'>
            <div className='space-y-4 text-center'>
                <h1 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382] w-136 max-sm:w-96 mx-auto leading-6'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className="tabs tabs-box justify-center bg-transparent gap-2">
                <input onClick={() => setActiveTab("tool")} type="radio" name="my_tabs_1" className="tab font-semibold rounded-full w-24" aria-label="Products" defaultChecked />
                <input onClick={() => setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab font-semibold rounded-full w-24" aria-label={`Cart (100)`} />
            </div>
        </div>
    );
};

export default ToolsHeader;