"use client";

import { useState } from "react";

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-gray-800/50 border border-gray-700 rounded-full py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        />
        <button 
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          🔍
        </button>
      </div>
    </form>
  );
} 