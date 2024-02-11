import React from 'react';

function ToppingOptions({ onSelectTopping }) {
  const toppingOptions = ['Pepperoni', 'Mushrooms', 'Onions', 'Bell Peppers'];

  return (
    <div>
      <h3>Choose Toppings:</h3>
      {toppingOptions.map((topping, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={topping}
            onChange={() => onSelectTopping(topping)}
          />
          <label>{topping}</label>
        </div>
      ))}
    </div>
  );
}

export default ToppingOptions;
