const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      text: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
    },
    category: {
      type: String,
      required: true,
    },
    images: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);