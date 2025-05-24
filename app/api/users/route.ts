import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth, currentUser } from "@clerk/nextjs";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    await connectToDB();

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({ clerkId: userId });
      await user.save();
    }

    const plainUser = user.toObject();

    plainUser._id = plainUser._id.toString();
    
    if (plainUser.wishlist) {
      plainUser.wishlist = plainUser.wishlist.map((id: any) => id.toString());
    }

    if (plainUser.orders) {
      plainUser.orders = plainUser.orders.map((order: any) => order.toString());
    }

    return NextResponse.json(plainUser, { status: 200 });

  } catch (err) {
    console.log("[users_GET]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const dynamic = 'force-dynamic';