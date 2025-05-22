"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import SearchBox from "@/components/SearchBox"; 

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const cart = useCart();
  const router = useRouter(); 

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleSearchClear = () => {
    router.push("/"); 
  };

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-[#0b1c2c] max-sm:px-2 text-white">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-400 ${pathname === "/" && "text-red-400"}`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-red-400 ${pathname === "/wishlist" && "text-red-400"}`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-400 ${pathname === "/orders" && "text-red-400"}`}
        >
          Orders
        </Link>
      </div>

      <div className="flex gap-3 px-3 py-1 items-center rounded-lg bg-white text-black max-w-xs w-full">
        <SearchBox onClear={handleSearchClear} /> 
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border border-white rounded-lg px-2 py-1 hover:bg-white hover:text-[#0b1c2c] max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-[#0b1c2c] text-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-red-400" onClick={() => setDropdownMenu(false)}>Home</Link>
            <Link href={user ? "/wishlist" : "/sign-in"} className="hover:text-red-400" onClick={() => setDropdownMenu(false)}>
              Wishlist
            </Link>
            <Link href={user ? "/orders" : "/sign-in"} className="hover:text-red-400" onClick={() => setDropdownMenu(false)}>
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border border-white rounded-lg px-2 py-1 hover:bg-white hover:text-[#0b1c2c]"
              onClick={() => setDropdownMenu(false)}
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;