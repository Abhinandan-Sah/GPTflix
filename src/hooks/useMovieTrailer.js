import  { useEffect } from 'react'
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';


export const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch();

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
    getMovieVideos(movieId);
  }, []);
  
}


