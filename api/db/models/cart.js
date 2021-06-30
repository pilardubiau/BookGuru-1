const db = require("../index");
const { Model, DataTypes } = require("sequelize");
const crypto = require("crypto");
const Order = require('./order');

class Cart extends Model {}

Cart.init(
  {
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
  },
  { sequelize: db, modelName: "cart", timestamps: false }
);

// Cart.prototype.addOrder = function(price) {
//   this.totalPrice += 
// }

module.exports = Cart;
