import { useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const calculatePages = () => {
    const maxPages = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(totalPage, startPage + maxPages - 1);

    const pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    if (totalPage === currentPage) {
      pagesToShow.unshift(currentPage - 3);
      pagesToShow.unshift(currentPage - 4);
    }

    if (currentPage === totalPage - 1) pagesToShow.unshift(currentPage - 3);

    return pagesToShow;
  };

  const pages = calculatePages();

  return (
    <nav aria-label="Page navigation" className="flex justify-center w-full">
      <ul className="list-style-none mb-6 flex">
        <li className="flex items-center">
          <FaChevronLeft className="text-white" />
          <a
            className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className="cursor-pointer">
            <a
              className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
                currentPage === page
                  ? "bg-neutral-50 text-neutral-600 dark:text-white dark:bg-neutral-700"
                  : "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="flex items-center">
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </a>
          <FaAngleRight className="text-white" />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
