const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: false,
  },
  item: [
    {
      itemId: String,
      itemPrice: String,
      itemQuantity: String,
    },
  ],
});

const Order = mongoose.model("orders", OrderSchema);
module.exports = Order;
