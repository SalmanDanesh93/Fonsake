const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Sake' },
    { name: 'Clothing' },
    { name: 'Accessories' },
  ]);

  console.log('categories seeded'); 

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Fonzake',
      description: 'The best around',
      image: '            ADD PHOTO PATH    ',
      category: categories[0]._id,
      price: 20.0,
      quantity: 1000
    },
    {
      name: 'Cherry Fonzake',
      description: 'The best around',
      image: '            ADD PHOTO PATH    ',
      category: categories[0]._id,
      price: 20.0,
      quantity: 1000
    },
    {
      name: 'Cherry Fonzake',
      description: 'The best around',
      image: '            ADD PHOTO PATH    ',
      category: categories[0]._id,
      price: 20.0,
      quantity: 1000
    },
    {
      name: 'Cherry Fonzake',
      description: 'The best around',
      image: '            ADD PHOTO PATH    ',
      category: categories[0]._id,
      price: 20.0,
      quantity: 1000
    },
    {
      name: 'Cherry Fonzake',
      description: 'The best around',
      image: '            ADD PHOTO PATH    ',
      category: categories[0]._id,
      price: 20.0,
      quantity: 1000
    },
    {
      name: 'Cherry Fonzake',
      description: 'The best around',
      image: '            ADD PHOTO PATH    ',
      category: categories[0]._id,
      price: 20.0,
      quantity: 1000
    }
  ]);
  
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Sal',
    lastName: 'Funnyton',
    email: 'sfunnyton@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Bobby',
    lastName: 'Donny',
    email: 'bdonny@testmail.com',
    password: 'password12345'
  });

  console.log('user seeded');

  process.exit();
});