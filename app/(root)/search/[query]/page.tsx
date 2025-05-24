import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions/actions";
import { ProductType } from "@/lib/types";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  console.log("🔍 Search Query:", params.query);

  const searchedProducts: ProductType[] =
    (await getSearchedProducts(params.query)) || [];

  console.log("🛍️ Products Found:", searchedProducts);

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">
        Search results for "{params.query}"
      </p>

      {searchedProducts.length === 0 ? (
        <p className="text-body-bold my-5">No results found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {searchedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default SearchPage;