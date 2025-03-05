import { BookInfo } from "@/components/books/BookInfo";
import booksData from "@/data/books.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-[#e8f4f1] text-[#2d3c39] py-6 border-b border-[#d0e3df]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">Relics</h1>
          <p className="mt-1 text-[#2d3c39] opacity-80 italic">Your personal reading journey</p>
        </div>
      </header>
      
      <nav className="bg-[#e8f4f1] text-[#2d3c39] py-3 shadow-sm border-b border-[#d0e3df]">
        <div className="max-w-6xl mx-auto px-4 flex space-x-6">
          <a href="#" className="hover:text-[#3d6b63] transition-colors font-medium">Home</a>
          <a href="#" className="hover:text-[#3d6b63] transition-colors">To Read</a>
          <a href="#" className="hover:text-[#3d6b63] transition-colors">Read</a>
          <a href="#" className="hover:text-[#3d6b63] transition-colors">Currently Reading</a>
        </div>
      </nav>

      {/* First section with warm beige background */}
      <section className="py-12 bg-[#f9f8f4]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-[#382110] mb-6 border-b border-[#e3dfd7] pb-2">Books I Want to Read</h2>
          <BookInfo books={booksData.toRead} bgColor="beige" />
        </div>
      </section>
      
      {/* Second section with mint green background */}
      <section className="py-12 bg-[#e8f4f1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-[#2d3c39] mb-6 border-b border-[#d0e3df] pb-2">Books I've Read</h2>
          <BookInfo books={booksData.read} bgColor="mint" />
        </div>
      </section>
      
      {/* Third section with beige background */}
      <section className="py-12 bg-[#f9f8f4]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-[#382110] mb-6 border-b border-[#e3dfd7] pb-2">Currently Reading</h2>
          <BookInfo books={booksData.currentlyReading} bgColor="beige" />
        </div>
      </section>

      <footer className="bg-[#e8f4f1] text-[#2d3c39] py-6 border-t border-[#d0e3df]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="italic text-sm">"A reader lives a thousand lives before he dies. The man who never reads lives only one." — George R.R. Martin</p>
          <p className="mt-4 text-xs opacity-70">© {new Date().getFullYear()} Relics - Your Personal Library</p>
        </div>
      </footer>
    </div>
  );
}
