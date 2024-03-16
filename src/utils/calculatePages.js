export const calculatePages = ({ totalPages, maxPages, currentPage }) => {
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);

  const pagesToShow = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  if (totalPages === currentPage) {
    pagesToShow.unshift(currentPage - 3);
    pagesToShow.unshift(currentPage - 4);
  }

  if (currentPage === totalPages - 1) pagesToShow.unshift(currentPage - 3);

  return pagesToShow;
};
