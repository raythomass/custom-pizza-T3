const db = require('./connection');
const { User, Pizza, OrderDetails, Order } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Order', 'orders');
  await cleanDB('OrderDetails', 'orderDetails');
  await cleanDB('User', 'users');
  await cleanDB('Pizza', 'pizzas');

  await User.create({
    username: 'raythomas',
    email: 'ray@testmail.com',
    password: 'password12345',
    address: '1234 Park Ave',
    phoneNumber: '1234567890'
  });

  await User.create({
    username: 'raymondthomas',
    email: 'thomas@testmail.com',
    password: '1234password',
    address: '0987 Park Ave',
    phoneNumber: '0987654321'
  });

  console.log('users seeded');

  process.exit();
});
