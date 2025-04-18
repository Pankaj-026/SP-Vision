import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  if (!movies) return;

  console.log(title);
  console.log(movies);

  return (
    <>
      <div>
        <h2 className="text-white font-bold text-2xl py-4 ml-4 md:ml-12">
          {title}
        </h2>
        <div className="flex overflow-x-scroll gap-8 hide-scrollbar">
          <div className="flex gap-2.5 pl-12 ">
            {movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  poster_url={movie.backdrop_path}
                  title={movie?.original_title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
