import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, duration, features } = pricing;

    return (
        <div className='border bg-blue-600 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-4xl'>{price}</h4>
            </div>

            {/* card body */}
            <div className='bg-blue-400 rounded-2xl p-4 mt-10'>
                <p className='text-2xl font-semibold text-blue-700'>Duration: {duration}</p>

                {
                    features.map((feature, index) => <PricingFeature
                        key={index}
                        feature={feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;