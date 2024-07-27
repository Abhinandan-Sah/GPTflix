import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'


const GptSearchBar = () => {
    const languageKey = useSelector((store)=> store.config.lang)
  return (
    <div className='w-full flex justify-center'>
        <form className='w-[80%] sm:w-3/4 md:w-3/4 lg-[60%] xl:w-1/2 h-10 grid grid-cols-12'>
        <input type='text' className='p-4 m-2 rounded-md bg-slate-200 col-span-9 placeholder-gray-500  text-black' placeholder={lang[languageKey].gptSearchPlaceholder} />
        <button className='col-span-3 m-2 py-2 font-semibold text-lg bg-red-700 rounded-lg'>{lang[languageKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar