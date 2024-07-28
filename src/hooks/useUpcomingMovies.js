import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice.js'
import { useEffect } from 'react';

const useUpcomingMovies = (() => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store=> store.movies.upcomingMovies)


  

  useEffect(()=>{
    if(!upcomingMovies){
      const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      }
      getUpcomingMovies()};
  },[upcomingMovies,dispatch]);
});

export default useUpcomingMovies;