import React from "react";
import { Link } from "react-router-dom";

type Movie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
};

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Title}</span>
        <p>Year : {movie.Year}</p>
      </div>
      <div>
        <Link to={`movie/${movie.imdbID}`}>Read More</Link>
      </div>
    </div>
  );
};

export default MovieCard;
