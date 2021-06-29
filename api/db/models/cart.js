const db = require("../index");
const { Model, DataTypes } = require("sequelize");
const crypto = require("crypto");

class Cart extends Model {}

Cart.init(
  {
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
  },
  { sequelize: db, modelName: "cart", timestamps: false }
);

module.exports = Cart;
