"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const subcategories = {
  women: [
    { title: "Tops", image: "/images/women/tops.jpeg" },
    { title: "Dresses", image: "/images/women/dresses.jpeg" },
    { title: "Shorts/Skirt", image: "/images/women/shorts-skirt.jpeg" },
    { title: "Shirts", image: "/images/women/shirts.jpeg" },
    { title: "T-Shirts", image: "/images/women/tshirts.jpeg" },
    { title: "Jumpsuits", image: "/images/women/jumpsuits.jpeg" },
    { title: "Leggings", image: "/images/women/leggings.jpg" },
    { title: "Joggers/Pants/Jeans", image: "/images/women/joggers-jeans.jpeg" },
    { title: "Night Suits", image: "/images/women/night-suits.jpg" },
    { title: "Sports Bottomwear", image: "/images/women/sports-bottom.jpeg" },
    { title: "Sports Topwear", image: "/images/women/sports-top.jpeg" },
    { title: "Top & Bottom Sets", image: "/images/women/top-bottom.jpeg" },
    { title: "Jackets", image: "/images/women/jackets.jpeg" },
    { title: "Sweatshirts", image: "/images/women/sweatshirts.jpeg" },
    { title: "Sweaters", image: "/images/women/sweaters.jpeg" },
    { title: "Capes/Shrug/Ponchos", image: "/images/women/capes.jpg" },
    { title: "Coats", image: "/images/women/coats.jpg" },
    { title: "Blazers/Waistcoats", image: "/images/women/blazers.jpeg" },
  ],
  men: [
    { title: "Shorts", image: "/images/men/shorts.jpg" },
    { title: "Shirts", image: "/images/men/shirts.jpg" },
    { title: "T-Shirts", image: "/images/men/tshirts.jpg" },
    { title: "Tanks", image: "/images/men/tanks.jpg" },
    { title: "Pants/Jeans", image: "/images/men/jeans.jpg" },
    { title: "Joggers", image: "/images/men/joggers.jpg" },
    { title: "Trackpants", image: "/images/men/trackpants.jpg" },
    { title: "Tracksuits", image: "/images/men/tracksuits.jpeg" },
    { title: "Gym Tshirts", image: "/images/men/gym-tshirts.jpg" },
    { title: "Night Suits", image: "/images/men/night-suits.jpg" },
    { title: "Jackets", image: "/images/men/jackets.jpg" },
    { title: "Sweatshirts", image: "/images/men/sweatshirts.jpeg" },
    { title: "Sweaters", image: "/images/men/sweaters.jpeg" },
    { title: "Gym Bottomwear", image: "/images/men/gym-bottom.jpg" },
    { title: "Coats", image: "/images/men/coats.jpg" },
    { title: "Blazers", image: "/images/men/blazers.jpeg" },
  ],
};

type SubcategoryItem = {
  title: string;
  image: string;
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const data = subcategories[params.category.toLowerCase() as keyof typeof subcategories];
  if (!data) return notFound();

  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold sm:font-extrabold tracking-tight leading-tight text-center sm:text-left text-black">
        {params.category}
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:hidden mt-6">
        {data.map((item: SubcategoryItem) => (
          <Link
            key={item.title}
            href={`/category/${params.category}/${encodeURIComponent(item.title)}`}
          >
            <div className="group">
              <div className="rounded-xl overflow-hidden bg-white border-2 border-[#001F3F] shadow hover:shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
              <p className="text-center mt-2 font-medium text-sm group-hover:text-pink-600 transition-colors duration-300">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        {data.map((item: SubcategoryItem) => (
          <Link
            key={item.title}
            href={`/category/${params.category}/${encodeURIComponent(item.title)}`}
          >
            <div className="group">
              <div className="rounded-xl overflow-hidden bg-white border-2 border-[#001F3F] shadow hover:shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <p className="text-center mt-3 font-medium group-hover:text-pink-600 transition-colors duration-300">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";