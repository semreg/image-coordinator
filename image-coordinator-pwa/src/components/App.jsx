import { hot } from 'react-hot-loader/root'
import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './main/Main'

function App (props) {
  return (
    <Router>
      <Layout>
        <Main />
      </Layout>
    </Router>
  )
}

export default hot(App)
