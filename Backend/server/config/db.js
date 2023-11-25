const { Sequelize } = require('sequelize');
//const { Restaurant } = require('../models/restaurantModel');

const sequelize = new Sequelize('food', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); 
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };

// const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

// const Connection = require('pg').Pool

// const connection = new Connection ({
//   user: DB_NAME,
//   password: DB_PASSWORD,
//   host : DB_PASSWORD,
//   port: 5432,
//   database: DB_NAME
// })

// module.exports = connection;
