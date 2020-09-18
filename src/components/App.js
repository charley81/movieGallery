import React from 'react'
import { render } from 'react-dom'
import Layout from './layout/layout'
import Row from './Row'
import request from '../utilities/request'

export default function App() {
  return (
    <Layout>
      <Row title={'Trending Now'} fetchUrl={request.fetchTrending} isLargeRow />
      {/* <Row title={'Top Rated'} fetchUrl={request.fetchTopRated} />
      <Row title={'Action'} fetchUrl={request.fetchAction} />
      <Row title={'Adventure'} fetchUrl={request.fetchAdventure} />
      <Row title={'Animation'} fetchUrl={request.fetchAnimation} />
      <Row title={'Comedy'} fetchUrl={request.fetchComedy} />
      <Row title={'Crime'} fetchUrl={request.fetchCrime} />
      <Row title={'Documentary'} fetchUrl={request.fetchDocumentary} />
      <Row title={'Drama'} fetchUrl={request.fetchDrama} />
      <Row title={'Family'} fetchUrl={request.fetchFamily} />
      <Row title={'Fantasy'} fetchUrl={request.fetchFantasy} />
      <Row title={'History'} fetchUrl={request.fetchHistory} />
      <Row title={'Horror'} fetchUrl={request.fetchHorror} />
      <Row title={'Music'} fetchUrl={request.fetchMusic} />
      <Row title={'Mystery'} fetchUrl={request.fetchMystery} />
      <Row title={'Romance'} fetchUrl={request.fetchRomance} />
      <Row title={'Science Fiction'} fetchUrl={request.fetchScienceFiction} />
      <Row title={'T.V. Movies'} fetchUrl={request.fetchTvMovie} />
      <Row title={'Thriller'} fetchUrl={request.fetchThriller} />
      <Row title={'War'} fetchUrl={request.fetchWar} />
      <Row title={'Western'} fetchUrl={request.fetchWestern} /> */}
    </Layout>
  )
}

render(React.createElement(App), document.getElementById('root'))
