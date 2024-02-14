const db = require('./connection');
const { User, Pizza, OrderDetails, Order } = require('../models');
const cleanDB = require('./cleanDB');
const bcrypt = require('bcrypt');

db.once('open', async () => {
  await cleanDB('Order', 'orders');
  await cleanDB('User', 'users');
  await cleanDB('Pizza', 'pizzas');

  const pizzas = await Pizza.insertMany([
    {
      name: 'Cheese Pizza',
      description:
        'A timeless classic made with artisan dough, classic red sauce, and a homemade blend of cheeses',
      price: 7.99,
    },
    {
      name: 'Pepproni Pizza',
      description:
        'The most popular pizza for a reason. Handcrafted with premium pepperoni',
      price: 9.99,
    },
    {
      name: 'Sausage PIzza',
      description:
        'Premium italian sausage mixed with our homemade blend of cheeses',
      price: 9.99,
    },
    {
      name: 'Mushroom Pizza',
      description:
        'Mushrooms stacked on top of artisan dough a collection of cheeses',
      price: 9.99,
    },
    {
      name: 'Ham and Pineapple Pizza',
      description:
        "You either love it or hate it, but it's here to stay. Ham and Pineapple mixed with our classic red sauce.",
      price: 9.99,
    },
  ]);
  console.log('pizzas seeded');

  await User.create({
    username: 'raythomas',
    email: 'ray@testmail.com',
    password: '1234password',
    address: '1234 Park Ave',
    phoneNumber: '1234567890',
    savedOrders: [
      {
        pizzas: [pizzas[1]._id]
      }
    ]
  });

  await User.create({
    username: 'raymondthomas',
    email: 'thomas@testmail.com',
    password: '1234password',
    address: '0987 Park Ave',
    phoneNumber: '0987654321'
  });

  await Pizza.create({  
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
    price: 10.99
  });

  await Pizza.create({
    name: 'Pepperoni Pizza',
    description: 'Delicious pizza with pepperoni, tomato sauce, and mozzarella cheese',
    price: 12.99
  });

  console.log('users seeded');

  process.exit();
});
