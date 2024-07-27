import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => { 

  return (
    <div className='bg-Login-backgroundImage bg-cover bg-center h-screen text-slate-100   pt-32'>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch