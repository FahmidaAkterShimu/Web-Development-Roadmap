import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature }) => {
    return (
        <p className='flex gap-2 mt-4 text-2xl'>
            <CircleCheckBig></CircleCheckBig> {feature}
        </p>
    );
};

export default PricingFeature;