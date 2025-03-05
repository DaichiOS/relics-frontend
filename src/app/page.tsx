import { BookInfo } from "@/components/books/BookInfo";
import { Navbar } from "@/components/layout/Navbar";
import booksData from "@/data/books.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header id="home" className="bg-[#e8f4f1] text-[#2d3c39] py-6 border-b border-[#d0e3df]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">Relics</h1>
          <p className="mt-1 text-[#2d3c39] opacity-80 italic">My personal reading journey</p>
        </div>
      </header>
      
      <Navbar />

      {/* First section with warm beige background */}
      <section id="to-read" className="py-12 bg-[#f9f8f4]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-[#382110] mb-6 border-b border-[#e3dfd7] pb-2">Books I Want to Read</h2>
          <BookInfo books={booksData.toRead} bgColor="beige" />
        </div>
      </section>
      
      {/* Second section with mint green background */}
      <section id="read" className="py-12 bg-[#e8f4f1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-[#2d3c39] mb-6 border-b border-[#d0e3df] pb-2">Books I&apos;ve Read</h2>
          <BookInfo books={booksData.read} bgColor="mint" />
        </div>
      </section>
      
      {/* Third section with beige background */}
      <section id="currently-reading" className="py-12 bg-[#f9f8f4]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-[#382110] mb-6 border-b border-[#e3dfd7] pb-2">Currently Reading</h2>
          <BookInfo books={booksData.currentlyReading} bgColor="beige" />
        </div>
      </section>

      <footer className="bg-[#e8f4f1] text-[#2d3c39] py-6 border-t border-[#d0e3df]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="italic text-sm">&ldquo;A reader lives a thousand lives before he dies. The man who never reads lives only one.&rdquo; — George R.R. Martin</p>
          <p className="mt-4 text-xs opacity-70">© {new Date().getFullYear()} Relics - Your Personal Library</p>
        </div>
      </footer>
    </div>
  );
}
