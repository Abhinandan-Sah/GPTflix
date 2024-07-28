import  { useEffect } from 'react'
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';


export const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store=> store.movies.trailerVideo)

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filerData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filerData.length ? filerData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos(movieId);
  }, []);
  
}


