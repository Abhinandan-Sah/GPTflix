import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    return json.results;
  }


const handleGptSearchClick = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", dangerouslyAllowBroswer:true });

      const prompt = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, koi Mil Gaya";
    
      const result = await model.generateContent(prompt);
      const response = await result.response;

      // Andaz Apna Apna, Hera Pheri, Chupke Chupke etc
      const textgpt = await response.text();
      // console.log(text);
      const gptMovies= textgpt.split(", ");
      //for each movie I will search TMDB API

      const promiseArray = gptMovies.map(movie=> searchMovieTMDB(movie));
      // promiseArray will give => [promise, promise, promise, promise, promise]

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResults({movieNames: gptMovies, movieResults:tmdbResults}));

    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.error('Rate limit exceeded or quota exceeded:', error.response.data);
            // Inform the user or take appropriate action
        } else {
            console.error('Error fetching movie recommendations:', error);
        }
    }
};


  return (
    <div className="w-full flex justify-center">
      <form
        className="w-[80%] sm:w-3/4 md:w-3/4 lg-[60%] xl:w-1/2 h-10 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
            ref={searchText}
          type="text"
          className="p-4 m-2 rounded-md bg-slate-200 col-span-9 placeholder-gray-500  text-black"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button onClick={handleGptSearchClick} className="col-span-3 m-2 py-2 font-semibold text-lg bg-red-700 rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
