"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CollectionType, UserType } from "@/lib/types";

interface CollectionSlideshowProps {
  collections?: CollectionType[];
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const CollectionSlideshow: React.FC<CollectionSlideshowProps> = ({
  collections = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageSrc = (
    image: string | string[] | undefined
  ): string => {
    if (!image) return "/placeholder.jpg";
    if (Array.isArray(image)) return image[0] || "/placeholder.jpg";
    if (typeof image === "string") return image;
    return "/placeholder.jpg";
  };

  useEffect(() => {
    if (collections.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [collections]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev + 1) % collections.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prev) => (prev - 1 + collections.length) % collections.length
      ),
    trackMouse: true,
  });

  if (!collections.length) {
    return (
      <p className="text-body-bold text-center">No collections available</p>
    );
  }

  const currentCollection = collections[currentIndex];

  return (
    <div
      {...handlers}
      className="relative w-full bg-gray-200 overflow-hidden h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCollection._id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full"
        >
          <Link href={`/collections/${currentCollection._id}`}>
            <div className="relative w-full h-full">
              <Image
                src={getImageSrc(currentCollection.image)}
                alt={currentCollection.title}
                fill
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + collections.length) % collections.length
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full text-white z-10"
        aria-label="Previous Collection"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % collections.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full text-white z-10"
        aria-label="Next Collection"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default CollectionSlideshow;