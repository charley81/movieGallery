import React from 'react'
import { render } from 'react-dom'
import Layout from './layout/layout'
import Row from './Row'

export default function App() {
  return (
    <Layout>
      <Row />
    </Layout>
  )
}

render(React.createElement(App), document.getElementById('root'))
