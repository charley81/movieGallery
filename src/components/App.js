import React from 'react'
import { render } from 'react-dom'
import Layout from './layout/layout'
import Row from './Row'
import requests from '../utilities/request'
import Banner from './Banner'
import Navbar from './Navbar'

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <Row
        title={'Trending Now'}
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
      <Row title={'Action'} fetchUrl={requests.fetchAction} />
      <Row title={'Adventure'} fetchUrl={requests.fetchAdventure} />
      <Row title={'Animation'} fetchUrl={requests.fetchAnimation} />
      <Row title={'Comedy'} fetchUrl={requests.fetchComedy} />
      <Row title={'Crime'} fetchUrl={requests.fetchCrime} />
      <Row title={'Documentary'} fetchUrl={requests.fetchDocumentary} />
      <Row title={'Drama'} fetchUrl={requests.fetchDrama} />
      <Row title={'Family'} fetchUrl={requests.fetchFamily} />
      <Row title={'Fantasy'} fetchUrl={requests.fetchFantasy} />
      <Row title={'History'} fetchUrl={requests.fetchHistory} />
      <Row title={'Horror'} fetchUrl={requests.fetchHorror} />
      <Row title={'Music'} fetchUrl={requests.fetchMusic} />
      <Row title={'Mystery'} fetchUrl={requests.fetchMystery} />
      <Row title={'Romance'} fetchUrl={requests.fetchRomance} />
      <Row title={'Science Fiction'} fetchUrl={requests.fetchScienceFiction} />
      <Row title={'T.V. Movies'} fetchUrl={requests.fetchTvMovie} />
      <Row title={'Thriller'} fetchUrl={requests.fetchThriller} />
      <Row title={'War'} fetchUrl={requests.fetchWar} />
      <Row title={'Western'} fetchUrl={requests.fetchWestern} />
    </Layout>
  )
}

render(React.createElement(App), document.getElementById('root'))
