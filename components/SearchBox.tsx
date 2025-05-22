"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Search } from "lucide-react";

interface SearchBoxProps {
  onClear: () => void; 
}

const SearchBox = ({ onClear }: SearchBoxProps) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim().length === 0) {
        setSuggestions([]);
        return;
      }

      console.log(`Fetching: ${process.env.NEXT_PUBLIC_API_URL}/api/search/${query}`); // ✅ Debugging

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search/${query}`);

        if (!res.ok) {
          console.error(`Error: ${res.status} - ${res.statusText}`);
          setSuggestions([]);
          return;
        }

        const data = await res.json();

        if (data.success) {
          setSuggestions(data.products);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    };

    const delay = setTimeout(fetchSuggestions, 300); 
    return () => clearTimeout(delay);
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`);
      setSuggestions([]); 
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
    onClear(); 
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center border border-gray-300 px-4 py-2 rounded-md bg-white">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="w-full focus:outline-none"
        />
        {query && (
          <X
            className="cursor-pointer text-gray-500 hover:text-black mx-2"
            onClick={clearSearch}
          />
        )}
        <Search className="text-gray-500" />
      </div>

      {suggestions.length > 0 && (
        <div className="absolute w-full bg-white border border-gray-300 shadow-md rounded-md mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((product) => (
            <div
              key={product._id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push(`/product/${product._id}`)}
            >
              <img
                src={product.media[0]}
                alt={product.title}
                className="w-10 h-10 object-cover rounded-md mr-3"
              />
              <span className="text-sm">{product.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;