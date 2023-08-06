import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

type Props = {};

export default function MovieListing({}: Props) {
  const { movies } = useSelector((state: any) => state.movies);

  return (
    <div>
      {movies &&
        movies.map((movie: any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
}
