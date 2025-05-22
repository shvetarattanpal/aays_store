import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String], 
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    sizes: {
      type: [String], 
      default: [],
    },
    colors: {
      type: [String], 
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String], 
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;