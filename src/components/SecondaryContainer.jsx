import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(
    (store) => store?.movies
  );

  if (!movies) return;

  return (
    <>
      <div className="bg-black">
        <div className=" -mt-40 relative z-20">
          {/* Now Playing */}
          <MovieList
            title={"Now Playing"}
            movies={movies?.nowPlayingMovies}
          />

          {/* Trending */}
          <MovieList
            title={"Trending"}
            movies={movies?.trendingMovies}
          />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
