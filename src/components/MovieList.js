import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="text-slate-50 p-4 md:p-6">
        <h1 className="font-bold text-3xl pb-4">{title}</h1>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none">
        <div className="flex justify-center items-center">
            {movies?.map((movie)=> {return(<Link key={movie.id} to={"/browse/"+ movie.id}> <MovieCard  posterPath={movie} /></Link>)})}

        </div>
        </div>
        
      </div>
    </div>
  );
};

export default MovieList;
