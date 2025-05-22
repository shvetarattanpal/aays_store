import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Document } from "mongoose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serializeMongooseDocuments = (doc: Document) => {
  const obj = doc.toObject();
  obj._id = obj._id.toString(); 
  return obj;
};