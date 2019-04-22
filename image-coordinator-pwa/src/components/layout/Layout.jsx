import React from 'react'
import { element } from 'prop-types'
import Nav from './nav/Nav'
import Footer from './footer/Footer'

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: element
}

export default Layout
