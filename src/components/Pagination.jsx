import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { calculatePages } from "../utils/calculatePages";

const Pagination = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState();

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams({ page });
    setCurrentPage(page);
  };

  useEffect(() => {
    const page = parseInt(searchParams.get("page") ?? 1);
    setCurrentPage(page);
  }, []);

  const pages = calculatePages({ totalPages, currentPage, maxPages: 5 });

  return (
    <nav
      aria-label="Page navigation"
      className="flex justify-center w-full h-[10svh] items-center mt-6"
    >
      <ul className="list-style-none flex gap-1">
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            className={`flex items-center gap-1 rounded bg-transparent px-3 py-2 text-sm md:text-lg text-white transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-600 ${
              currentPage === 1
                ? "bg-gray-300 opacity-50 pointer-events-none text-stone-600"
                : `cursor-pointer`
            }`}
            disabled={currentPage === totalPages}
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li key={page} className="cursor-pointer">
            <button
              className={`inline-block md:w-12 rounded px-3 py-2 text-sm md:text-lg transition-all duration-300 ${
                currentPage === page
                  ? "bg-neutral-50 text-neutral-600 dark:text-white dark:bg-neutral-700"
                  : "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`flex items-center gap-1 rounded bg-transparent px-3 py-2 text-sm md:text-lg text-white transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-600 ${
              currentPage === totalPages
                ? "bg-gray-300 opacity-50 pointer-events-none text-stone-600"
                : `cursor-pointer`
            }`}
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
