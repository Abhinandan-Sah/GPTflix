import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => { 

  return (
    <div className='bg-Login-backgroundImage min-h-screen  bg-fixed bg-cover  bg-center  text-slate-100  opacity-90 w-full  pt-48 md:pt-32 '>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch