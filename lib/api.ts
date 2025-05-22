const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const fetchProduct = async (productId: string) => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching product [${productId}]:`, error);
    return null;
  }
};

export const getCategoryProducts = async (category: string) => {
  const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
  try {
    const res = await fetch(`${API_URL}/products/category/${formattedCategory}`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error(`Error fetching category products [${category}]:`, error);
    return null;
  }
};