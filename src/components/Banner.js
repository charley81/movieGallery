/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import colors from '../utilities/cssVariables'
import React, { useState, useEffect } from 'react'
import axios from '../utilities/axios'
import requests from '../utilities/request'

function Banner() {
  const [movie, setMovie] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAdventure)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  // If the banner overview text is more than 150 chars. This function will only show n number of characters otherwise it shows the full text length
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  console.log(movie)

  return (
    <header
      className='banner'
      css={css`
        background-image: url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}');
        background-size: cover;
        background-position: center center;
        height: 450px;
        object-fit: contain;
        width: 100%;

        .banner-contents {
          margin-left: 1rem;
          padding-top: 5rem;
          height: 150px;
        }

        .banner-title {
          font-size: 3rem;
        }

        .banner-buttons {
          margin: 1rem 0;

          button {
            cursor: pointer;
            outline: transparent;
            border: transparent;
            border-radius: 3px;
            padding: 0.5rem 2rem;
            margin-right: 1rem;
            background-color: ${colors.lightColor};
            color: ${colors.primaryColor};
            transition: all 0.3s ease-in-out;

            &:hover {
              opacity: 0.7;
            }
          }
        }

        .bottom-fade {
          height: 17.1rem;
          background-image: linear-gradient(
            180deg,
            transparent,
            rgba(0, 0, 0, 0.61),
            ${colors.primaryColor}
          );
        }
      `}
    >
      <div className='banner-contents'>
        <h1>{movie?.title || movie?.original_title}</h1>
        <div className='banner-buttons'>
          <button>Play</button>
          <button>More Info</button>
        </div>
        <p className='banner-description'>{truncate(movie?.overview, 150)}</p>
      </div>

      <div className='bottom-fade'></div>
    </header>
  )
}

export default Banner
