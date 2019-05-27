import React, { useEffect, useContext } from 'react'
import { element } from 'prop-types'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import LocaleContext from '../../context/locale-context.js'

function Layout ({ children }) {
  const context = useContext(LocaleContext)

  useEffect(() => {
    const locale = localStorage.getItem('locale')

    if (locale) {
      context.updateLocale(locale)
    } else {
      context.updateLocale('en')
    }
  }, [])

  if (context.content.contents) {
    return (
      <>
        <Nav />
          {children}
        <Footer />
      </>
    )
  } else {
    return ''
  }
}

Layout.propTypes = {
  children: element
}

export default Layout
