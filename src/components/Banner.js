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

  return (
    <header
      className='banner'
      css={css`
        background-image: url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}');
        background-size: cover;
        background-position: center center;
        height: 450px;
      `}
    >
      <div className='banner-contents'></div>
    </header>
  )
}

export default Banner
