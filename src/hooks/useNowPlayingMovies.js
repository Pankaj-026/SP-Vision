import { options } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMoives } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );
    const data = await response.json();
    dispatch(addNowPlayingMoives({
      nowPlayingMovies: data.results,
    }));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;