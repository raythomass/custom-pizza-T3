import React from 'react';

function SauceOptions({ onSelectSauce }) {
  const sauceOptions = ['Marinara', 'Alfredo', 'Barbecue'];

  return (
    <div>
      <h3>Choose Sauce:</h3>
      {sauceOptions.map((sauce, index) => (
        <div key={index}>
          <input
            type="radio"
            name="sauce"
            value={sauce}
            onChange={() => onSelectSauce(sauce)}
          />
          <label>{sauce}</label>
        </div>
      ))}
    </div>
  );
}

export default SauceOptions;
