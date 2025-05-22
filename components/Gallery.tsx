"use client";

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <div
        className="border border-gray-300 rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105"
      >
        <Image
          src={mainImage}
          width={500}
          height={500}
          alt="product"
          className="w-96 h-96 object-cover"
        />
      </div>

      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="product"
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer transition-transform hover:scale-105 ${
              mainImage === image ? "border-2 border-black" : "border border-gray-300"
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;