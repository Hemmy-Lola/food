const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT 
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();


module.export = {sequelize, testConnection};







// const Connection = require('pg').Pool

// const connection = new Connection ({
//   user: 'postgres',
//   password: 'root',
//   host : "localhost",
//   port: 5432,
//   database: 'food'
// })

// module.exports = connection;
