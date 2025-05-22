"use client";

import { useEffect, useState } from "react";
import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import CollectionSlideshow from "@/components/CollectionSlideshow";
import { CollectionType } from "@/lib/types"; 

const Collections = () => {
  const [collections, setCollections] = useState<CollectionType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        const data = await getCollections();
        setCollections(data);
      } catch (err) {
        console.error("Error fetching collections:", err);
        setError("Failed to load collections");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>

      {loading && <p className="text-body-bold">Loading collections...</p>}

      {error && <p className="text-body-bold text-red-500">{error}</p>}

      {!loading && collections.length > 0 && <CollectionSlideshow collections={collections} />}

      {!loading && collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;