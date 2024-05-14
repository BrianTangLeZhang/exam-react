import React from "react";

function Filters(props) {
  const {
    search,
    genre,
    sort,
    limit,
    genres,
    onSearchChange,
    onGenreChange,
    onSortChange,
    onLimitChange,
  } = props;
  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by title */}
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* INSTRUCTION: Add a selector for filtering by genre */}
      <select value={genre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      {/* INSTRUCTION: Add a selector for sorting */}
      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">No Sorting</option>
        <option value="title">Sort by Title</option>
        <option value="rating">Sort by Rating</option>
      </select>
      {/* INSTRUCTION: Add a selector for limiting the number of games per page */}
      <select value={limit} onChange={(e) => onLimitChange(e.target.value)}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={1000}>Show All</option>
      </select>
    </div>
  );
}

export default Filters;
