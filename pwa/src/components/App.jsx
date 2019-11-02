import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './main/Main'
import GlobalState from '../context/GlobalState'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../javascripts/alert-template'

function App (props) {
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: '30px',
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <GlobalState>
        <Router>
          <Layout>
            <Main />
          </Layout>
        </Router>
      </GlobalState>
    </AlertProvider>
  )
}

export default App
