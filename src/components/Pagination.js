import React from "react";

function Pagination(props) {
  const { currentPage, games, onPageChange, limit } = props;
  return (
    <div className="pagination">
      {/* INSTRUCTION: Add a button to go to the previous page. Disable the button if the current page is the first page. */}
      {currentPage !== 1 ? (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      ) : (
        <button disabled>Previous</button>
      )}
      {/* INSTRUCTION: Display the current page number */}
      Page: {currentPage}
      {/* INSTRUCTION: Add a button to go to the next page. Disable the button if there are no games. */}
      {games.length >= limit ? (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      ) : (
        <button disabled>Next</button>
      )}
    </div>
  );
}

export default Pagination;
