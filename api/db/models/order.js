const db = require("../index");
const { Model, DataTypes } = require("sequelize");
const crypto = require("crypto");

class Order extends Model {}

Order.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    // bought: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  },
  { sequelize: db, modelName: "order", timestamps: false }
);

module.exports = Order;
