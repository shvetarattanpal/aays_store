"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { ProductType } from "@/lib/types";
import { UserType } from "@/lib/types";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const imageUrl = product.media?.[0] || product.imageUrl;

  const onWishlistChange = (updatedWishlist: string[]) => {
    console.log("Wishlist updated:", updatedWishlist);
  };

  return (
    <div className="w-full max-w-[220px] sm:max-w-[250px] flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-200 ease-in-out touch-manipulation">
      <Link
        href={`/products/${product._id}`}
        className="w-full border-2 border-[#0b1f3a] rounded-xl overflow-hidden"
      >
        {imageUrl ? (
          <div className="relative aspect-[2/3] w-full">
            <Image
              src={imageUrl}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 250px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full aspect-[2/3] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </Link>

      <div className="mt-2 flex flex-col gap-1">
        <Link
          href={`/products/${product._id}`}
          className="font-bold text-base line-clamp-2 leading-tight"
        >
          {product.title}
        </Link>

        <div className="text-sm text-gray-500 capitalize">
          {product.category}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg font-extrabold text-black">
            $
            {typeof product.price === "number"
              ? product.price.toFixed(2)
              : "0.00"}{" "}
            CAD
          </p>

          <HeartFavorite
            product={product}
            updateSignedInUser={updateSignedInUser}
            onWishlistChange={onWishlistChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;