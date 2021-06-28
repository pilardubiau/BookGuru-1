const db = require("../index");
const { Model, DataTypes } = require("sequelize");
const crypto = require("crypto");

class Cart extends Model {}

Cart.init(
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    bought: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "cart", timestamps: false }
);

module.exports = Cart;
