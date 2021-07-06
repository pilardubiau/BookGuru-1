const db = require("../index");
const { Model, DataTypes } = require("sequelize");

class Rating extends Model {}

Rating.init(
  {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "rating", timestamps: false }
);

module.exports = Rating;