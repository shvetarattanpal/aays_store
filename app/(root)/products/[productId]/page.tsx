"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { ProductType } from "@/lib/types";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const { user } = useUser();
  const [productDetails, setProductDetails] = useState<ProductType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    try {
      console.log("productId", params.productId);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.productId}`, {
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to fetch product");

      const data = await res.json();
      setProductDetails(data);
    } catch (error) {
      console.error(`Error fetching product [${params.productId}]:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchProductDetails();
  }, [user, params.productId]);

  if (!user)
    return <div className="text-center py-10">Unauthorized. Please sign in.</div>;

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (!productDetails)
    return <div className="text-center py-10">Product not found.</div>;

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media || []} />
        <div>
          <ProductInfo productInfo={productDetails} />

          <div className="mt-4 text-sm text-muted-foreground break-all">
            <span className="font-medium">Product ID:</span> {productDetails._id}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Related Products</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;