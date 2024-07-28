import React from "react";
import { Header } from "./Header.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.js";
import { useSelector } from "react-redux";

export const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black ">
      {/* <div className="relative">
        <Header />
        <div className="absolute top-0">
          {" "}
          <MainContainer />
        </div>
      </div> */}
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
