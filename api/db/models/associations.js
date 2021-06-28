const User = require("./user");
const Cart = require("./cart");
const Book = require("./book");

User.hasMany(Cart);
Cart.belongsTo(User);

Book.hasMany(Cart)
Cart.belongsTo(Book)

//, { through: 'User_cart' }
//, { through: 'User_cart' }
