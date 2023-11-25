const sequelize= require("sequelize");
const { DataTypes } = require("sequelize");

const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNul: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.VARCHAR,
      unique: true,
    },
    type_restaurant: {
      type: DataTypes.INTEGER,
    },    
    commander: {
      type: DataTypes.BOOLEAN,
    },
    reserver: {
      type: DataTypes.BOOLEAN,
    },
    picture: {
      type: DataTypes.VARCHAR,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    freezeTableName: true
    
  });

module.exports = Restaurant;