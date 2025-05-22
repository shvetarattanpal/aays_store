"use client";

import { useRouter } from "next/navigation";

const categories = [
  { name: "Women", image: "/women.jpg", type: "Women" },
  { name: "Men", image: "/men.jpeg", type: "Men" },
];

export default function CategoryGrid() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => router.push(`/category/${cat.type.toLowerCase()}`)}
          className="cursor-pointer rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 touch-manipulation border-2 border-[#0a1f44]"
        >
          <div className="w-full aspect-[4/3] bg-white rounded-lg overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover object-top transition-transform duration-300"
            />
          </div>
          <h2 className="text-xl font-bold text-center mt-4">{cat.name}</h2>
        </div>
      ))}
    </div>
  );
}