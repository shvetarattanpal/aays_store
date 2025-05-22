import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/lib/types";

async function getProductsByCategory(category: string, subCategory: string) {
  const encodedSubCategory = encodeURIComponent(subCategory);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/by-category/${category}/${encodedSubCategory}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch products:", res.status);
    return [];
  }

  return res.json();
}

export default async function SubCategoryPage({
  params,
}: {
  params: { category: string; subCategory: string[] };
}) {
  const decodedCategory = decodeURIComponent(params.category);
  const subCategory = decodeURIComponent(params.subCategory.join("/"));

  const rawProducts = await getProductsByCategory(decodedCategory, subCategory);

  const products: ProductType[] = rawProducts.map((product: any) => ({
    _id: String(product._id),
    title: product.title,
    description: product.description,
    media: product.media ?? [],
    imageUrl: product.imageUrl,
    category: product.category,
    subCategory: product.subCategory,
    collections: product.collections ?? [],
    tags: product.tags ?? [],
    price: product.price,
    expense: product.expense,
    sizes: product.sizes ?? [],
    colors: product.colors ?? [],
    createdAt: product.createdAt?.toString() ?? "",
    updatedAt: product.updatedAt?.toString() ?? "",
  }));

  return (
    <div className="p-4">
      <h2 className="text-heading2-bold mb-4 capitalize">
        {subCategory} for {decodedCategory}
      </h2>

      {products?.length > 0 ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          No products found in this subcategory.
        </p>
      )}
    </div>
  );
}

export const dynamic = "force-dynamic";