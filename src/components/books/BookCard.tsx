"use client";

import { Book } from "@/types";
import Image from "next/image";
import { useState } from "react";

export function BookCard({ book }: { book: Book }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="group flex flex-col h-full bg-gray-800/30 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-900/20 transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative h-64 w-full">
        <Image 
          src={book.coverImage || ""} 
          alt={book.title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-white">{book.title}</h3>
        <p className="text-amber-400 text-sm">{book.author}</p>
        
        <div className={`mt-2 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 opacity-0'}`}>
          <p className="text-gray-300 text-sm">{book.description}</p>
          {book.publishedYear && (
            <p className="text-gray-400 text-xs mt-2">Published: {book.publishedYear}</p>
          )}
        </div>
        
        <button className="mt-auto text-xs text-amber-400 hover:text-amber-300">
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
} 