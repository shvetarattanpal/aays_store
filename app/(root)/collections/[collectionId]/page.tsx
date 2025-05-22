import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import React from "react";
import { ProductType } from "@/lib/types";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-4 py-6 sm:px-5 lg:px-8 flex flex-col gap-4">
      <div className="w-full">
        <h2 className="text-heading2-bold text-center mb-4">
          Products in Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {Array.isArray(collectionDetails.products) &&
          collectionDetails.products.length > 0 ? (
            collectionDetails.products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-body-normal text-grey-2">
              No products found for this collection.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";