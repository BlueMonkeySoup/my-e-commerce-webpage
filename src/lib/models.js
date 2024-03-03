import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    catSlug: {
      type: String,
      required: true,
      default: "Item",
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    title: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Products =
  mongoose.models?.Products || mongoose.model("Products", ProductsSchema);
export const Order =
  mongoose.models?.Order || mongoose.model("Order", orderSchema);
