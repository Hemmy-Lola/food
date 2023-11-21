const express = require("express");
const sequelize = require("sequelize");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require('cookie-parser');
const userRoutes = require("./route/user");
const {PORT} = process.env;
const app = express();
const { sequelize, testConnection } = require('./config/db');
//middleware qui permet les requêtes HTTP
app.use(cors({
    origin: 'http://localhost:3000',
  }));
//Cela indique à Express.js de parser automatiquement le corps des requêtes en JSON
app.use(express.json());
app.use(cookieParser());
app.use(router);


app.use('/user', userRoutes);

testConnection();
// Configuration de Sequelize (en utilisant un modèle User fictif)
// const User = require('./models/userModel'); // Importez votre modèle User

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Database sync failed:', err);
});

//Demarre le serveur sur le port 3306
//Lors du test il faudra mettre votre port
app.listen(PORT, () => {
    console.log("server has started")
});