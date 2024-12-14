import React from 'react';

export const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr className='bg-white text-black border text-center border-[#e2e2e2]'>
        {columns?.map((colm, i) => {
          console.log(colm);
          return (
            <th
              key={i}
              className={`px-5 py-3 ${colm === `Percentage funded` ? `w-[50%] ` : `w-1`}`}
            >
              {colm}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
