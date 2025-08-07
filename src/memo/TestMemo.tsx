import React, { useState, useMemo } from "react";

//  Type
type Product = {
  id: number;
  name: string;
  tags: string[];
};

const products: Product[] = [
  { id: 1, name: "iPhone", tags: ["electronics", "apple", "mobile"] },
  { id: 2, name: "MacBook", tags: ["electronics", "apple", "laptop"] },
  { id: 3, name: "Galaxy S22", tags: ["electronics", "samsung", "mobile"] },
  { id: 4, name: "AirPods", tags: ["electronics", "apple", "accessory"] },
];

export default function TestMemo() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    products.forEach((product) => {
      product.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedTags.length === 0) return products;
    return products.filter((product) =>
      selectedTags.every((tag) => product.tags.includes(tag))
    );
  }, [selectedTags]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Filter</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 border rounded cursor-pointer ${
              selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="px-3 py-1 cursor-pointer bg-red-500 text-white rounded"
          >
            Clear Filters
          </button>
        )}
      </div>

      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li key={product.id} className="border p-2 rounded">
            <div className="font-medium">{product.name}</div>
            <div className="text-sm text-gray-500">
              Tags: {product.tags.join(", ")}
            </div>
          </li>
        ))}
        {filteredProducts.length === 0 && (
          <li className="text-gray-500 italic">No products match selected tags.</li>
        )}
      </ul>
    </div>
  );
}
