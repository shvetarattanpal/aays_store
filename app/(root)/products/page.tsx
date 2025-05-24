'use client';

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/lib/types";

const AllProductsPage = () => {
  const { user } = useUser();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchAllProducts();
  }, [user]);

  if (!user) return <div className="text-center py-10">Unauthorized. Please sign in.</div>;
  if (loading) return <div className="text-center py-10">Loading products...</div>;
  if (!products.length) return <div className="text-center py-10">No products found.</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {products.map((product: ProductType) => (
          <div
            key={product._id}
            className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer touch-manipulation w-full"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @media (hover: none) {
          .hover\\:shadow-lg:hover {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AllProductsPage;