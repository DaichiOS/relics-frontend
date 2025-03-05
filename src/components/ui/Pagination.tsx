"use client";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  bgColor?: 'beige' | 'mint' | 'blue';
}

export function Pagination({ currentPage, totalPages, onPageChange, bgColor = 'beige' }: PaginationProps) {
  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;
  
  // Prevent default behavior
  const handlePageClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault(); // Prevent default browser behavior
    onPageChange(page);
  };
  
  // Define styles based on background color
  const getStyles = () => {
    switch(bgColor) {
      case 'mint':
        return {
          textColor: 'text-[#2d3c39]',
          hoverColor: 'hover:text-[#3d6b63]',
          activeColor: 'border-[#3d6b63]'
        };
      case 'blue':
        return {
          textColor: 'text-[#2d3a4a]',
          hoverColor: 'hover:text-[#4a6b96]',
          activeColor: 'border-[#4a6b96]'
        };
      default: // beige
        return {
          textColor: 'text-[#2d1a0c]',
          hoverColor: 'hover:text-[#8b4513]',
          activeColor: 'border-[#8b4513]'
        };
    }
  };
  
  const styles = getStyles();
  
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex items-center space-x-1 text-sm">
        <button
          onClick={(e) => currentPage > 1 && handlePageClick(e, currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 ${
            currentPage === 1 
              ? 'text-[#999999] cursor-not-allowed' 
              : `${styles.textColor} ${styles.hoverColor} hover:underline font-medium`
          }`}
        >
          « Previous
        </button>

        <span className="mx-2 text-[#777777]">|</span>

        <div className="flex items-center space-x-1">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={(e) => handlePageClick(e, pageNumber)}
                className={`px-2 py-1 ${
                  currentPage === pageNumber
                    ? `${styles.textColor} font-bold border-b-2 ${styles.activeColor}`
                    : `${styles.textColor} ${styles.hoverColor} hover:underline`
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <span className="mx-2 text-[#777777]">|</span>

        <button
          onClick={(e) => currentPage < totalPages && handlePageClick(e, currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 ${
            currentPage === totalPages 
              ? 'text-[#999999] cursor-not-allowed' 
              : `${styles.textColor} ${styles.hoverColor} hover:underline font-medium`
          }`}
        >
          Next »
        </button>
      </div>
    </div>
  );
} 