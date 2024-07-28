import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    if (!trailerVideo) {
      const getMovieVideos = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
          const json = await response.json();
          const filteredData = json.results.filter((video) => video.type === 'Trailer');
          const trailer = filteredData.length ? filteredData[0] : json.results[0];
          dispatch(addTrailerVideo(trailer));
        } catch (error) {
          console.error('Failed to fetch movie trailer:', error);
        }
      };

      getMovieVideos();
    }
  }, [movieId, trailerVideo, dispatch]);
};
