// This component displays detailed information about a book.

import { Book } from "@/types";

export function BookInfo({ book }: { book: Book }) { 
    return (
        <div className="bg-black p-4 rounded-lg shadow-md">
            <div className="border p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-white">{book.author}</p>
            </div>
        </div>
    )
}
