import React from 'react';

function CheeseOptions({ onSelectCheese }) {
  const cheeseOptions = ['Mozzarella', 'Cheddar', 'Parmesan'];

  return (
    <div>
      <h3>Choose Cheese:</h3>
      {cheeseOptions.map((cheese, index) => (
        <div key={index}>
          <input
            type="radio"
            name="cheese"
            value={cheese}
            onChange={() => onSelectCheese(cheese)}
          />
          <label>{cheese}</label>
        </div>
      ))}
    </div>
  );
}

export default CheeseOptions;
