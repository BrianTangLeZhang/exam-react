import React from "react";

function GamesTable(props) {
  const { games, isLoading, isError } = props;
  /* INSTRUCTION: Show "loading..." when isLoading is true */
  if (isLoading)
    return (
      <div style={{ width: 100, height: 100, textAlign: "center" }}>
        loading...
      </div>
    );
  /* INSTRUCTION: Show "error" when isError is true */
  if (isError)
    return (
      <div style={{ width: 100, height: 100, textAlign: "center" }}>
        {isError.message}
      </div>
    );
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genres</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {/* INSTRUCTION: if games data is available, display the games in a table. if not, display a "No games found." message */}
        {!games || games.length < 1 ? (
          <tr>
            <td colSpan={3}>No games found</td>
          </tr>
        ) : (
          <>
            {games.map((game, index) => {
              const { title, genres, rating } = game;
              return (
                <tr key={index}>
                  <td>{title}</td>
                  <td>{genres.join(", ")}</td>
                  <td>{rating}</td>
                </tr>
              );
            })}
          </>
        )}
      </tbody>
    </table>
  );
}

export default GamesTable;
