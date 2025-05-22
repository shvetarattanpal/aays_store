import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const { productId } = await req.json();

    if (!productId || !isValidObjectId(productId)) {
      return new NextResponse("Invalid Product Id", { status: 400 });
    }

    if (!Array.isArray(user.wishlist)) {
      user.wishlist = [];
    }

    const index = user.wishlist.findIndex((id: string | { toString: () => string }) => id.toString() === productId.toString());

    if (index > -1) {
      user.wishlist.splice(index, 1);
    } else {
      user.wishlist.push(productId);
    }

    await user.save();

    const plainUser = user.toObject();
    plainUser.wishlist = plainUser.wishlist.map((id: any) => id.toString());

    return NextResponse.json(plainUser, { status: 200 });
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};