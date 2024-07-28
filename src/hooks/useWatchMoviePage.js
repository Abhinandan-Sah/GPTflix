import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addMovieVideo } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const useWatchMoviePage= async(movieId)=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        getMovieVideos();
    },[])
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
    
        const filerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filerData.length ? filerData[0] : json.results[0];
        dispatch(addMovieVideo(trailer))
      };

}

export default useWatchMoviePage;