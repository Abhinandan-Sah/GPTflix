import React from "react";
import { Header } from "./Header.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
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
