import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(posterPath?.poster_path=== null){
    return null;
  }
  
  return (
    <div>
        <div className='w-48 pr-4 h-full cursor-pointer'>
        <img alt="movie poster" className='' src={IMG_CDN + posterPath?.poster_path } />
        </div>
    </div>
  )
}

export default MovieCard