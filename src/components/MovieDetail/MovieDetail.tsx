import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieApi from "../../api/MovieApi";
import { APIKEY } from "../../api/MovieApiKey";

interface Movie {
  Poster: string;
  Title: string;
  Plot: string;
}

export default function MovieDetail() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await MovieApi.get(`?apikey=${APIKEY}&i=${id}&plot=full`);
        if (res.data) {
          setMovie(res.data);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h4>Loading....</h4>
      ) : movie ? (
        <div>
          <div>
            <img src={movie.Poster} alt="" />
          </div>
          <div>
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
          </div>
        </div>
      ) : (
        <h4>No movie data available.</h4>
      )}
    </div>
  );
}
