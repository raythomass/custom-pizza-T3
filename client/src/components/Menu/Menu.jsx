import { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {
    return (
        <div>
        <header className='menu-header'>
        <h1>Our Menu</h1>
        </header>
        <main>
            <section class="pizza-item">
                <h2>Margherita Pizza</h2>
                <p class="description">Classic pizza with tomato sauce, mozzarella cheese, and fresh basil</p>
                <p class="price">$10.99</p>
                <button class="btn-customize">Customize</button>
                <button class="btn-add-to-cart">Add to Cart</button>
            </section>
            <section class="pizza-item">
                <h2>Pepperoni Pizza</h2>
                <p class="description">Delicious pizza with pepperoni, tomato sauce, and mozzarella cheese</p>
                <p class="price">$12.99</p>
                <button class="btn-customize">Customize</button>
                <button class="btn-add-to-cart">Add to Cart</button>
            </section>
        </main>
        </div>
    );
};

export default Menu;