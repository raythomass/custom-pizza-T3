import React, { useState } from 'react';
import CrustOptions from './CrustOptions';
import SauceOptions from './SauceOptions';
import CheeseOptions from './CheeseOptions';
import ToppingOptions from './ToppingOptions';

function PizzaBuilder() {
  // State for selected options
  const [selectedCrust, setSelectedCrust] = useState('');
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedCheese, setSelectedCheese] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);

  // Handler functions for updating selected options
  const handleCrustSelection = (crust) => setSelectedCrust(crust);
  const handleSauceSelection = (sauce) => setSelectedSauce(sauce);
  const handleCheeseSelection = (cheese) => setSelectedCheese(cheese);
  const handleToppingSelection = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(item => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  // Logic for adding pizza to cart
  const handleAddToCart = () => {
    // Add selected pizza to cart
    const pizza = {
      crust: selectedCrust,
      sauce: selectedSauce,
      cheese: selectedCheese,
      toppings: selectedToppings
    };
    console.log('Pizza added to cart:', pizza);
    // You can further implement logic to add pizza to cart state or send to backend
  };

  return (
    <div>
      <h2>Customize Your Pizza</h2>
      <CrustOptions onSelectCrust={handleCrustSelection} />
      <SauceOptions onSelectSauce={handleSauceSelection} />
      <CheeseOptions onSelectCheese={handleCheeseSelection} />
      <ToppingOptions onSelectTopping={handleToppingSelection} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default PizzaBuilder;
