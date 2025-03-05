"use client";

// This component displays detailed information about a book.

import { Pagination } from "@/components/ui/Pagination";
import { Book } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface BookInfoProps {
    books: Book[];
    bgColor?: 'beige' | 'mint' | 'blue';
}

export function BookInfo({ books, bgColor = 'beige' }: BookInfoProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 6; // Adjust based on your grid layout
    
    if (books.length === 0) {
        return <p className="text-amber-800">No books found</p>;
    }
    
    // Calculate pagination values
    const totalPages = Math.ceil(books.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const currentBooks = books.slice(startIndex, endIndex);
    
    const handlePageChange = (newPage: number) => {
        // Prevent default scrolling behavior
        setCurrentPage(newPage);
        
        // That's it! No scrolling code needed
    };
    
    // Define styles based on background color
    const getCardStyles = () => {
        switch(bgColor) {
            case 'mint':
                return {
                    coverBg: 'bg-[#dfecea]',
                    titleColor: 'text-[#2d3c39]',
                    authorColor: 'text-[#3d6b63]',
                    borderColor: 'border-[#c5dbd7]'
                };
            case 'blue':
                return {
                    coverBg: 'bg-[#e0e9f5]',
                    titleColor: 'text-[#2d3a4a]',
                    authorColor: 'text-[#4a6b96]',
                    borderColor: 'border-[#c5d4e6]'
                };
            default: // beige
                return {
                    coverBg: 'bg-[#f0ede5]',
                    titleColor: 'text-[#2d1a0c]',
                    authorColor: 'text-[#8b4513]',
                    borderColor: 'border-[#d9d6d0]'
                };
        }
    };
    
    const styles = getCardStyles();
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBooks.map((book) => (
                    <div key={book.id} className={`flex flex-col h-full bg-white rounded shadow-md overflow-hidden ${styles.borderColor} hover:shadow-lg transition-shadow`}>
                        {/* Book cover with background matching section */}
                        <div className={`relative h-56 w-full ${styles.coverBg} flex justify-center p-4`}>
                            <Image 
                                src={book.coverImage || ""} 
                                alt={book.title} 
                                width={120}
                                height={180}
                                className="object-contain shadow-md"
                                style={{ maxHeight: "180px" }}
                            />
                        </div>
                        
                        {/* Book details with colors matching section */}
                        <div className="p-4 flex-1 flex flex-col bg-white">
                            <h3 className={`font-serif font-bold ${styles.titleColor} text-lg mb-1`}>{book.title}</h3>
                            <p className={`${styles.authorColor} text-sm font-medium mb-1`}>by {book.author}</p>
                            {book.publishedYear && (
                                <p className="text-[#666666] text-xs mb-2">{book.publishedYear}</p>
                            )}
                            <p className="text-[#333333] text-sm line-clamp-3 flex-grow mt-1">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination component */}
            <div className="mt-10">
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    bgColor={bgColor}
                />
            </div>
        </div>
    );
}