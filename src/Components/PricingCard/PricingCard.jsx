import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
    const {name ,price, description,features}=pricing;
  return (
    <div className="border bg-amber-600 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      <div className="bg-amber-400 border border-red-500 rounded-2xl p-3">
        <p>{description}</p>

        {features.map((feature ,index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
    </div>
  );};

export default PricingCard;