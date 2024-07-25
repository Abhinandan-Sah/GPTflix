import React from "react";
import { Header } from "./Header.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black h-full">
      {/* <div className="relative">
        <Header />
        <div className="absolute top-0">
          {" "}
          <MainContainer />
        </div>
      </div> */}
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/**
       MainContainer
        - VideoBackground
        - VideoTitle
       SecondaryContainer
        - MovieList * n
        - Cards * n
       
       */}
    </div>
  );
};
