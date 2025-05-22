import mongoose from "mongoose";
import { ProductType } from "@/lib/types";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Aays_Store",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export const mapToProductType = (product: any): ProductType => ({
  _id: product._id.toString(),
  title: product.title,
  description: product.description,
  media: product.media,
  imageUrl: product.imageUrl,
  category: product.category,
  subCategory: product.subCategory,
  collections: product.collections,
  tags: product.tags,
  price: product.price,
  cost: product.cost,
  sizes: product.sizes,
  colors: product.colors,
  createdAt: product.createdAt,
  updatedAt: product.updatedAt,
});