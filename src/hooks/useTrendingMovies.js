import { options } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMoives } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      options
    );
    const data = await response.json();
    dispatch(addTrendingMoives(data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
