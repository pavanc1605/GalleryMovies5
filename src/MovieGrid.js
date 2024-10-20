import React, { useEffect, useState } from 'react';
import { getMovies } from './API';
import MovieCard from './MovieCard';
import './MovieGrid.css';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieData = await getMovies();
      setMovies(movieData);
    }
    fetchData();
  }, []);

  return (
    <div className="movie-grid-container">
      <h2>Romantic Comedy</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
