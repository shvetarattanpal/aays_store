"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AccountPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 bg-white text-black">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center">
        My Account
      </h1>

      <div className="space-y-8">
        <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <p><strong>Name:</strong> {user?.fullName}</p>
          <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
          <p><strong>User ID:</strong> {user?.id}</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <p className="text-gray-700">You haven't placed any orders yet.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => router.push("/account/settings")}
            className="bg-black text-white py-3 px-6 rounded-lg w-full sm:w-auto text-center font-medium hover:bg-gray-900 transition-colors"
          >
            Edit Profile
          </button>
          <button
            onClick={() => router.push("/sign-out")}
            className="bg-red-500 text-white py-3 px-6 rounded-lg w-full sm:w-auto text-center font-medium hover:bg-red-600 transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;