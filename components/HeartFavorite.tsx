"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ProductType, UserType } from "@/lib/types";

interface HeartFavoriteProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
  onWishlistChange?: (updatedWishlist: string[]) => void;
}

const HeartFavorite = ({
  product,
  updateSignedInUser,
  onWishlistChange,
}: HeartFavoriteProps) => {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch user");
      const data: UserType = await res.json();
      const liked = data?.wishlist?.some((item) =>
        typeof item === "string" ? item === product._id : item._id === product._id
      );
      setIsLiked(liked);
    } catch (err) {
      console.log("[users_GET]", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation(); 

    if (!user) {
      router.push("/sign-in");
      return;
    }

    try {
      const res = await fetch("/api/users/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id }),
      });

      if (!res.ok) {
        throw new Error("Failed to update wishlist");
      }

      const updatedUser: UserType = await res.json();
      const liked = (updatedUser?.wishlist as (string | ProductType)[])?.some((item) =>
        typeof item === "string" ? item === product._id : item._id === product._id
      );

      setIsLiked(liked);
      updateSignedInUser?.(updatedUser);
      onWishlistChange?.(
        (updatedUser?.wishlist || []).map((item) =>
          typeof item === "string" ? item : item._id
        )
      );
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className="p-1"
      aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        fill={isLiked ? "red" : "white"}
        color={isLiked ? "red" : "black"}
        className="w-5 h-5"
      />
    </button>
  );
};

export default HeartFavorite;