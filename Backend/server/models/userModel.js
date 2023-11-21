// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/db'); // fichier config db
// // Définir le modèle d'utilisateur
// class Users extends Model {}

// Users.init(
//   {
//     // les champs du modèle utilisateur
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     role: {
//         type : DataTypes.STRING,
//         defaultValue : 0, //valeur 0 = aucun role , 1 === admin , 2 === client , 3 === restaurateur
//     },
//     create_at: {
//         type : DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//     }
//   },
//   {
//     sequelize, // la connexion à la base de données
//     modelName: 'User', // nom du modèle
//     tableName: 'Users', // nom de la table
//     timestamps: false, // pour ne pas utiliser le timestamps de sequelize
//     hooks: {
//       beforeValidate: (user, options) => {
//         // Logique à exécuter avant la validation du modèle User
//         if (user.username) {
//           // Mettre le nom d'utilisateur en minuscules avant la validation
//           user.username = user.username.toLowerCase();
//         }
//       },
//       beforeCreate: (user, options) => {
//         // Logique à exécuter avant la création d'une instance User
//         console.log('Before create hook for User model');
//       },
//       // Ajoutez d'autres hooks si nécessaire
//     },
//   }
// );

// module.exports = Users;
