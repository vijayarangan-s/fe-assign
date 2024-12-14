import React from 'react';
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex items-center w-full justify-between p-2'>
      <div className='flex space-x-2 justify-center'>
        <button
          className={`px-3 py-1 flex items-center text-white bg-blue-500 disabled:text-black rounded disabled:bg-gray-200 ${currentPage === 1 ? `cursor-not-allowed` : ''}`}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className='w-4 h-4 mr-2' />
          First
        </button>
        <button
          className={`px-3 py-1 flex items-center text-white bg-blue-500 disabled:text-black rounded disabled:bg-gray-200 ${currentPage === 1 ? `cursor-not-allowed` : ''}`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className='w-4 h-4 mr-2' />
          Previous
        </button>

        <button
          className={`px-3 py-1 flex items-center text-white bg-blue-500 rounded disabled:text-black disabled:bg-gray-200 ${currentPage === totalPages ? `cursor-not-allowed` : ''}`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
          <ChevronRight className='w-4 h-4 ml-2' />
        </button>
        <button
          className={`px-3 py-1 flex items-center text-white bg-blue-500 rounded disabled:text-black disabled:bg-gray-200 ${currentPage === totalPages ? `cursor-not-allowed` : ''}`}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
          <ChevronsRight className='w-4 h-4 ml-2' />
        </button>
      </div>
      <div>{`Showing ${currentPage} of ${totalPages} Pages`}</div>
    </div>
  );
};

export default Pagination;
