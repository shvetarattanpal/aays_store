"use client";

import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ProductType, UserType } from "@/lib/types";
import Link from "next/link";

const Wishlist = () => {
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  useEffect(() => {
    if (!isLoaded) {
      console.log("[Frontend] Clerk user is still loading...");
    } else if (!user) {
      console.log("[Frontend] User is not authenticated!");
    } else {
      console.log("[Frontend] User is authenticated:", user.id);
    }
  }, [isLoaded, user]);

  const fetchSignedInUser = async () => {
    try {
      const res = await fetch("/api/users");

      if (!res.ok) {
        console.warn("[Frontend] ❌ Failed to fetch signed in user.");
        return;
      }

      const data = await res.json();

      if (data && data._id && data.wishlist) {
        console.log("[Frontend] ✅ Received signedInUser:", data);
        setSignedInUser(data);
      } else {
        console.warn("[Frontend] ❌ Invalid user data received:", data);
      }
    } catch (err) {
      console.error("[Frontend] ❌ Error fetching signed in user:", err);
    }
  };

  useEffect(() => {
    if (isLoaded && user) {
      fetchSignedInUser();
    }
  }, [isLoaded, user]);

  const fetchWishlistProducts = async () => {
    if (!signedInUser?.wishlist?.length) {
      console.warn("[Frontend] ❌ No wishlist found or invalid user.");
      setWishlist([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: signedInUser.wishlist }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("[Frontend] ❌ Failed to fetch wishlist products:", text);
      } else {
        const data = await res.json();
        console.log("[Frontend] ✅ Wishlist products fetched:", data);
        setWishlist(data);
      }
    } catch (err) {
      console.error("[Frontend] ❌ Error fetching wishlist products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (signedInUser) {
      fetchWishlistProducts();
    }
  }, [signedInUser]);

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);

    if (updatedUser.wishlist.length === 0) {
      setWishlist([]);
    } else {
      fetchWishlistProducts();
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="px-4 md:px-10 py-5">
      <p className="text-heading3-bold my-10 text-center">Your Wishlist</p>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p className="text-lg font-semibold mb-2">
            🫤 Your wishlist is empty
          </p>
          <p className="text-sm font-semibold mb-4">
            Start exploring and add products you love!
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-2 rounded-xl text-sm hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {wishlist.map((product, index) => (
            <ProductCard
              key={product._id || index}
              product={product}
              updateSignedInUser={updateSignedInUser}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Wishlist;