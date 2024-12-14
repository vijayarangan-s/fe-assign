import React, { useState, useEffect } from 'react';

export const usePaginatedData = (url, perPage) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  // Calculate pagination data
  const startIndex = (currentPage - 1) * perPage;
  const currentData = data.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(data.length / perPage);

  return { currentData, currentPage, totalPages, setCurrentPage, loading };
};
