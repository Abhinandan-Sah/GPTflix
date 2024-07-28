import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
  const gpt = useSelector((store)=> store.gpt);
  const {movieNames, movieResults} = gpt;
  if(!movieNames) return null;

  return (
    <div className='mt-12 w-[90%] p-5  mx-auto text-slate-100 bg-black'>
      <div>
        {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestion