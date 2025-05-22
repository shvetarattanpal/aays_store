import Image from "next/image";
import { auth } from "@clerk/nextjs";

import { getCollections } from "@/lib/actions/actions";
import CollectionSlideshow from "@/components/CollectionSlideshow";
import ProductList from "@/components/ProductList";
import CategoryGrid from "@/components/CategoryGrid";

export default async function Home() {
  console.log("🟢 Homepage loaded, calling getCollections...");

  const collections = await getCollections();
  console.log("✅ Fetched collections:", JSON.stringify(collections, null, 2));

  if (!Array.isArray(collections)) {
    console.error("❌ getCollections returned an invalid data type:", collections);
    return <div>Error fetching collections</div>;
  }

  collections.forEach((collection) => {
    console.log(`🛍️ Collection: ${collection.title}`, collection);
  });

  const { userId } = auth();
  const isSignedIn = !!userId;

  return (
    <main className="space-y-10 px-4 py-8 max-w-7xl mx-auto">
      <Image
        src="/banner.png"
        alt="banner"
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg shadow"
        priority
      />

      <section>
        <h2 className="text-2xl font-bold mb-4">Explore Our Collections</h2>
        <CollectionSlideshow collections={collections} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <CategoryGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <ProductList category="" isSignedIn={isSignedIn} />
      </section>
    </main>
  );
}

export const dynamic = "force-dynamic";