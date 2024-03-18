import React from "react";

type PaginationButtonsProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  page: number;
  totalPages: number;
};

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  handlePrevPage,
  handleNextPage,
  page,
  totalPages,
}) => {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="bg-transparent text-gray px-4 py-2"
      >
        Prev
      </button>
      <span className="text-gray">
        {page} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="bg-transparent text-gray px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
