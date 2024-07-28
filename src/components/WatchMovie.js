import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useWatchMoviePage from "../hooks/useWatchMoviePage";
import { useSelector } from "react-redux";
import { Header } from "./Header";

const WatchMovie = () => {
  const movieVideo = useSelector((store) => store.movies.movieVideo);
  const { movieId } = useParams();
  useWatchMoviePage(movieId);

  return (
    <div className=" bg-black min-h-screen  bg-fixed bg-cover  bg-center  text-slate-100  opacity-90 w-full ">
      <div className="w-full aspect-video">
        <iframe
          className="w-full md:pt-0 h-[90vh] md:h-[95vh]"
          src={"https://www.youtube.com/embed/" + movieVideo?.key}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    
  );
};

export default WatchMovie;
