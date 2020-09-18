import React, { useState, useEffect } from 'react'
import axiosInstance from '../utilities/axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='poster'>
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`${base_url}${movie.backdrop_path}`}
            alt=''
          />
        ))}
      </div>
    </div>
  )
}

export default Row
