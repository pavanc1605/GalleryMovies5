import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getImageUrl } from './API';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <LazyLoadImage
        alt={movie.name}
        src={getImageUrl(movie['poster-image'])}
        effect="blur"
        className="movie-poster"
      />
      <div className="movie-title">{movie.name}</div>
    </div>
  );
};

export default MovieCard;
