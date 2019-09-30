import React from "react";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const emptyMessage = <p>Film bulunamadı</p>;

  const moviesList = (
    <div>
      <h1>Film Listesi</h1>
      <h2>Test</h2>
    </div>
  );

  return <div>{movies.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
