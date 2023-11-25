const express = require("express");
const { connectDB } = require('./config/db');
const cors = require("cors");
const app = express();


//middleware
app.use(cors());
app.use(express.json());

// Appel de la fonction de connexion à la base de données au moment approprié
connectDB();

app.listen(3001, () =>{
  console.log("App fonctionne")
})