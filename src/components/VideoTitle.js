import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video text-slate-100 pt-[12%]  absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='p-4 px-16 -lg bg-white text-black rounded-lg text-xl hover:bg-opacity-80'> ▶ Play</button>
            <button className='mx-2 p-4 px-16 -lg bg-gray-500 rounded-lg text-xl bg-opacity-50'> More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle; 