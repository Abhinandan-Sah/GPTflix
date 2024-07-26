import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <div className='w-48 pr-4 h-full hover:scale-110 hover:duration-150'>
        <img alt="movie poster" className='' src={IMG_CDN + posterPath?.poster_path } />
        </div>
    </div>
  )
}

export default MovieCard