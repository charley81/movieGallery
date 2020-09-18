const API_KEY = process.env.REACT_APP_API_KEY

const request = {
  fetchTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated = `/movie/top_rated?api_key${API_KEY}&language=en-US`,
  fetchAction = `discover/movie?api_key${API_KEY}&with_genres=28`,
  fetchAdventure = `discover/movie?api_key${API_KEY}&with_genres=12`,
  fetchAnimation = `discover/movie?api_key${API_KEY}&with_genres=16`,
  fetchComedy = `discover/movie?api_key${API_KEY}&with_genres=35`,
  fetchCrime = `discover/movie?api_key${API_KEY}&with_genres=80`,
  fetchDocumentary = `discover/movie?api_key${API_KEY}&with_genres=99`,
  fetchDrama = `discover/movie?api_key${API_KEY}&with_genres=18`,
  fetchFamily = `discover/movie?api_key${API_KEY}&with_genres=10751`,
  fetchFantasy = `discover/movie?api_key${API_KEY}&with_genres=14`,
  fetchHistory = `discover/movie?api_key${API_KEY}&with_genres=36`,
  fetchHorror = `discover/movie?api_key${API_KEY}&with_genres=27`,
  fetchMusic = `discover/movie?api_key${API_KEY}&with_genres=10402`,
  fetchMystery = `discover/movie?api_key${API_KEY}&with_genres=9648`,
  fetchRomance = `discover/movie?api_key${API_KEY}&with_genres=10749`,
  fetchScienceFiction = `discover/movie?api_key${API_KEY}&with_genres=878`,
  fetchTvMovie = `discover/movie?api_key${API_KEY}&with_genres=10770`,
  fetchThriller = `discover/movie?api_key${API_KEY}&with_genres=53`,
  fetchWar = `discover/movie?api_key${API_KEY}&with_genres=10752`,
  fetchWestern = `discover/movie?api_key${API_KEY}&with_genres=37`,
}

export default request