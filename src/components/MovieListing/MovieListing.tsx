import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

type Props = {};

export default function MovieListing({}: Props) {
  const { movies } = useSelector((state: any) => state.movies);

  return (
    <div className="grid grid-cols-4 gap-3">
      {movies &&
        movies.map((movie: any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
}
