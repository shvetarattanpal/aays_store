"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/lib/types";

interface ProductListProps {
  category?: string;
  isSignedIn?: boolean;
}

const ProductList = ({ category, isSignedIn }: ProductListProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const endpoint = category
          ? `/api/products?category=${encodeURIComponent(category)}`
          : "/api/products";

        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.statusText}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
      }
    }

    fetchAllProducts();
  }, [category]);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold text-center">Products</p>

      {error ? (
        <p className="text-body-bold text-red-500">{error}</p>
      ) : !products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;