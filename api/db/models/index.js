const User = require('./user')
const Cart = require('./order')
const Book = require('./book')
const Order = require('./order')

// User.hasMany(Cart);
// Cart.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Book.hasMany(Order);
Order.belongsTo(Book);

// Cart.hasMany(Order)
// Order.belongsTo(Cart)

//, { through: 'User_cart' }
//, { through: 'User_cart' }

module.exports = { User, Cart, Book, Order }