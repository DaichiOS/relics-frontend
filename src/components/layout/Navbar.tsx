export function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-amber-400 font-bold text-xl">Relics</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">To Read</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Read</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Currently Reading</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 