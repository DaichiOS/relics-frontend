
import { BookInfo } from "@/components/books/BookInfo";
import { BookTitle } from "@/components/books/BookTitle";

export default function Home() {
  const book = {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/images/great-gatsby.jpg",
    description: "A novel about the American Dream",
    publishedYear: 1925,
  }

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to the Book Store</h1>
      </header>

      <main>
        {/* Using our BookTitle component */}
        <BookTitle title={book.title} />
        <BookInfo book={book} />
      </main>
    </div>
  );
}
