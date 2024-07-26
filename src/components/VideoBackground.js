import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-full flex-wrap ">
      <iframe
        className="w-full h-screen  "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        // src="https://www.youtube.com/embed/Is_Rpn08TpQ?si=PAwUBR19N3FUUpyf?&autoplay=1&mute=1" 
        title="netflix bg video"
        border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
      ></iframe>
    </div>
    
  );
};
