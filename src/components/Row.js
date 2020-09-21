/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import colors from '../utilities/cssVariables'
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

  return (
    <div
      className='row'
      css={css`
        margin: 2rem 0 2rem 1rem;

        .row-posters {
          display: flex;
          overflow-y: hidden;
          overflow-x: scroll;
          padding-top: 0.5rem;

          &::-webkit-scrollbar {
            display: none;
          }

          .row-poster {
            max-height: 150px;
            margin-right: 1rem;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;

            &:hover {
              transform: scale(1.08);
            }
          }
        }
      `}
    >
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map(movie => (
          <img
            className='row-poster'
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
