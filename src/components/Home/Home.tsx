import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieApi from "../../api/MovieApi";
import { APIKEY } from "../../api/MovieApiKey";
import { adddMovie } from "../../store/Reducer";
import MovieListing from "../MovieListing/MovieListing";

type Props = {};

export default function Home({}: Props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  console.log(search)
  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search : "Thor";
      const res = await MovieApi.get(
        `?apikey=${APIKEY}&s=${searchKey}&type=movie`
      );
      setTimeout(() => {
        dispatch(adddMovie(res.data.Search));
      }, 0);
    };
    fetchMovies();
  }, [search]);

  return (
    <div className="container mx-auto">
      <h3>Moveie</h3>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <MovieListing />
    </div>
  );
}
