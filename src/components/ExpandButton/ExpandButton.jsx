import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ExpandButton({ isExpanded, onClick }) {
  return (
    <button
      onClick={onClick}
      className='p-1 rounded-full hover:bg-gray-100 transition-colors'
      aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
    >
      {isExpanded ? (
        <ChevronUp className='w-4 h-4 text-gray-500' />
      ) : (
        <ChevronDown className='w-4 h-4 text-gray-500' />
      )}
    </button>
  );
}
