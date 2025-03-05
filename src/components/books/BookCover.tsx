"use client";

import Image from "next/image";
import { useState } from "react";

interface BookCoverProps {
  src: string | undefined;
  alt: string;
  priority?: boolean;
}

export function BookCover({ src, alt, priority = false }: BookCoverProps) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = "/images/book-placeholder.png";
  
  // Determine which image source to use
  const imageSrc = !src || imageError ? placeholderImage : src;

  return (
    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-md shadow-lg">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        onError={() => setImageError(true)}
      />
      
      {/* Optional overlay for placeholder images */}
      {(!src || imageError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
          <span className="text-white text-sm text-center px-2">
            {alt || "Cover not available"}
          </span>
        </div>
      )}
    </div>
  );
} 