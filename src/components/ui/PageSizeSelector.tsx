"use client";

interface PageSizeSelectorProps {
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  options: number[];
}

export function PageSizeSelector({ 
  pageSize, 
  onPageSizeChange, 
  options 
}: PageSizeSelectorProps) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-400">
      <span>Show</span>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white"
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>books per page</span>
    </div>
  );
}