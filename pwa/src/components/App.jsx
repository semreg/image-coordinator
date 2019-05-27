import { hot } from 'react-hot-loader/root'
import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './main/Main'
import GlobalState from '../context/GlobalState'

function App (props) {
  return (
    <GlobalState>
      <Router>
        <Layout>
          <Main />
        </Layout>
      </Router>
    </GlobalState>
  )
}

export default hot(App)
