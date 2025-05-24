import { serializeMongooseDocuments } from "@/lib/utils";
import Product from "@/lib/models/product"; 
const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("❌ NEXT_PUBLIC_API_URL is not defined in .env.local");
}

export const getCollections = async () => {
  try {
    //console.log("✅ Calling getCollections...");

    const res = await fetch(`${API_URL}/collections`, {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("❌ API response is not an array:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("[getCollections] Error:", error);
    return [];
  }
};

export const getCollectionDetails = async (collectionId: string) => {
  try {
    //console.log(`Fetching collection details for ID: ${collectionId}`);

    const res = await fetch(`${API_URL}/collections/${collectionId}`, {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`API Error: ${res.status} - ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("[getCollectionDetails] Error:", error);
    throw error;
  }
};

export const getProductsFromAPI = async (category: string, subCategory: string) => {
  try {
    //console.log("Fetching products from API...");

    const res = await fetch(
      `${API_URL}/products?category=${encodeURIComponent(category)}&subCategory=${encodeURIComponent(subCategory)}`,
      {
        method: "GET",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) throw new Error(`API Error: ${res.status} - ${res.statusText}`);

    const data = await res.json();
    //console.log("✅ Fetched products:", data);

    if (!data.success || !data.products) throw new Error("Failed to fetch products");

    return data.products;
  } catch (error) {
    console.error("[getProductsFromAPI] Error:", error);
    return [];
  }
};

export const getProducts = async () => {
  try {
    const products = await Product.find();
    return products.map(serializeMongooseDocuments);
  } catch (error) {
    console.error("[getProducts] DB Fetch Error:", error);
    return [];
  }
};

export const getProductDetails = async (urlOrId: string) => {
  try {
    const res = await fetch(urlOrId, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      console.error(`[getProductDetails] API returned: ${res.status}`);
      throw new Error("Failed to fetch product details");
    }

    const data = await res.json();

    //console.log("Product details fetched:", data);

    return data?.product ?? data;
  } catch (err) {
    console.error("[getProductDetails] Error:", err);
    throw err;
  }
};

export const getSearchedProducts = async (query: string) => {
  try {
    //console.log(`Searching products with query: ${query}`);

    const res = await fetch(`${API_URL}/search/${query}`, {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`API Error: ${res.status} - ${res.statusText}`);

    const data = await res.json();
    if (!data.success || !data.products) throw new Error("Failed to fetch searched products");

    return data.products;
  } catch (error) {
    console.error("[getSearchedProducts] Error:", error);
    return [];
  }
};

export const getOrders = async (customerId: string) => {
  try {
    //console.log(`Fetching orders for customer ID: ${customerId}`);

    const url = `${API_URL}/orders/customers/${customerId}`;

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    //console.log("Response Status:", res.status);
    //console.log("Response Headers:", res.headers);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} - ${res.statusText}`);
    }

    const contentType = res.headers.get("Content-Type");
    //console.log("Response Content-Type:", contentType);

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Expected JSON response, but received non-JSON content.");
    }

    const responseText = await res.text();
    //console.log("Raw Response Body:", responseText);

    if (!responseText) {
      throw new Error("Empty response body");
    }

    const data = JSON.parse(responseText);

    if (!data.success || !data.orders) {
      throw new Error("Failed to fetch orders: Missing data");
    }

    return data.orders;
  } catch (error) {
    console.error("[getOrders] Error:", error);
    return [];
  }
};

export const getRelatedProducts = async (productId: string) => {
  try {
    //console.log(`Fetching related products for product ID: ${productId}`);

    const res = await fetch(`${API_URL}/products/${productId}/related`, {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`API Error: ${res.status} - ${res.statusText}`);

    const data = await res.json();
    if (!data.success || !data.products) throw new Error("Failed to fetch related products");

    return data.products;
  } catch (error) {
    console.error("[getRelatedProducts] Error:", error);
    return [];
  }
};

export const getWishlistProducts = async (wishlist: string[]) => {
  if (!wishlist || wishlist.length === 0) {
    console.warn("⚠️ Wishlist is empty or undefined.");
    return [];
  }

  try {
    const productDetails = await Promise.all(
      wishlist.map(async (productId) => {
        try {
          //console.log(`Fetching wishlist product: ${productId}`);

          const res = await fetch(`${API_URL}/products/${productId}`, {
            method: "GET",
            cache: "no-store",
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            console.warn(`⚠️ Skipping product ${productId} (not found or error)`);
            return null;
          }

          const data = await res.json();
          if (!data.success || !data.product) return null;

          return data.product;
        } catch (err) {
          console.error(`❌ Error fetching product ${productId}:`, err);
          return null;
        }
      })
    );

    return productDetails.filter(Boolean);
  } catch (error) {
    console.error("❌ Error fetching wishlist products:", error);
    return [];
  }
};

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch all products: ${res.status}`);
    }

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("[getAllProducts] Error:", error);
    return [];
  }
};