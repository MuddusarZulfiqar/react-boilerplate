import { useState } from "react";

const usePagination = (totalItems, itemsPerPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
  };
};

export default usePagination;
// How to use
// import React from 'react';
// import usePagination from './usePagination'; // Assuming the hook is in a separate file

// const MyComponent = ({ data, itemsPerPage }) => {
//   const { currentPage, totalPages, nextPage, prevPage, goToPage, startIndex, endIndex } = usePagination(data.length, itemsPerPage);

//   const currentItems = data.slice(startIndex, endIndex + 1);

//   return (
//     <div>
//       {/* Render your data for the current page */}
//       {currentItems.map((item, index) => (
//         <div key={index}>{item}</div>
//       )}

//       {/* Pagination controls */}
//       <div>
//         <button onClick={prevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button onClick={nextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       {/* Optional: Page number buttons */}
//       <div>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index} onClick={() => goToPage(index + 1)} disabled={currentPage === index + 1}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
