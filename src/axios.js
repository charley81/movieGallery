import axios from 'axios'

// base url to make request to the movie database
const instance = axios.create({
  baseUrl: 'https://api.themoviedb.org/3'
})

export default instance
