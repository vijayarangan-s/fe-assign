import React from 'react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import Pagination from '../Pagination/Pagination';

export const Datatable = ({
  columns,
  header,
  data,
  currentPage,
  totalPages,
  onPageChange,
  ...OtherDatatableProps
}) => {
  return (
    <>
      <div
        className={`w-[75%] relative bg-white p-2 rounded-tl-lg rounded-tr-lg`}
      >
        {header}
      </div>
      <table class='table-auto border border-spacing-2 border-gray-300 w-[75%] text-left'>
        <TableHeader columns={columns} />
        <TableBody data={data} />
      </table>
      <div
        className={`w-[75%] relative bg-white p-2 rounded-bl-lg rounded-br-lg`}
      >
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(pageIndex) => onPageChange(pageIndex)}
        />
      </div>
    </>
  );
};
