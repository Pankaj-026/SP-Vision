import React from 'react'
import { img_url } from '../utils/constant'

const MovieCard = ({ poster_url}) => {

  return (
    <div className='w-56 pr-2'>
      <img  src={img_url + poster_url} alt="Movies" />
      {/* <h2>{title}</h2> */}
    </div>
  )
}

export default MovieCard