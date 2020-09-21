import React, { useState, useEffect } from 'react'
import axios from '../utilities/axios'
import requests from '../utilities/request'

function Banner() {
  const [movie, setMovie] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAdventure)
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  return <div></div>
}

export default Banner
