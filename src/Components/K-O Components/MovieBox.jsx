import React from 'react'
import data from"../movies.json";
import MovieTable from './MovieTable';



const MovieBox = () => {
    const movies = data.movies;

  return (
    <div className='movies'>
      <MovieTable data={movies}/>
    </div>
  )
}

export default MovieBox