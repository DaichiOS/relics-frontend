export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-amber-400 font-bold text-lg">Relics</h3>
            <p className="text-gray-400 text-sm">Your personal book collection</p>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Relics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 