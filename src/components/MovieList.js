import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="text-slate-50 p-6">
        <h1 className="font-bold text-3xl pb-4">{title}</h1>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none">
        <div className="flex ">
            {movies?.map((movie)=> <MovieCard key={movie.id} posterPath={movie} />)}
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default MovieList;
