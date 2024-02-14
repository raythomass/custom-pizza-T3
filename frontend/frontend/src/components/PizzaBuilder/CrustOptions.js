import React from 'react';

function CrustOptions({ onSelectCrust }) {
  const crustOptions = ['Thin Crust', 'Hand-Tossed', 'Deep Dish'];

  return (
    <div>
      <h3>Choose Crust:</h3>
      {crustOptions.map((crust, index) => (
        <div key={index}>
          <input
            type="radio"
            name="crust"
            value={crust}
            onChange={() => onSelectCrust(crust)}
          />
          <label>{crust}</label>
        </div>
      ))}
    </div>
  );
}

export default CrustOptions;
