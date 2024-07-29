import React from 'react'

const VideoTitle = ({title, overview}) => {
  
  return (
    <div className='w-full h-screen text-slate-100 pt-[20rem] md:pt-[16%]  pl-[8%]  absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl xl:text-6xl py-3'>{title}</h1>
        <p className='hidden md:block  md:py-6 text-sm xl:text-lg w-4/5 md:2/3 lg:w-[60%] xl:w-1/3 line-clamp-3 md:line-clamp-5 mb-3'>{overview}</p>
        <div>
            <button className='p-2 px-4 md:p-4 md:px-16  bg-white text-black rounded-lg text-md md:text-xl hover:bg-opacity-80'> ▶ Play</button>
            <button className='mx-2 p-2 px-3 md:p-4 md:px-16  bg-gray-500 rounded-lg text-md md:text-xl text-white bg-opacity-50'> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle; 