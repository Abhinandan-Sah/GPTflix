import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { VideoBackground } from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
    if(!movies){
        return;
    }

    if(movies == null) return <h1 className='text-3xl flex justify-center items-center text-white'>Loading...</h1>;

    const mainMovie = movies[1];

    const {original_title, overview, id} = mainMovie;
  return (
    <div className="w-full">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
        
    </div>
  )
}

export default MainContainer;