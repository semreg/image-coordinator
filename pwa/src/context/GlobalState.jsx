import React, { useReducer } from 'react'
import LocaleContext from './locale-context'
import localeReducer from '../reducers/locale-reducer'
import { node } from 'prop-types'
import localeCollection from '../static/locale/index.js'

const propTypes = { children: node }

function GlobalState ({ children }) {
  const [localeState, dispatch] = useReducer(localeReducer, { currentLang: null, content: {} })

  const updateLocale = locale => dispatch({ type: 'UPDATE_LOCALE', locale: locale })

  const langsList = Object.keys(localeCollection).map(key => ({
    name: localeCollection[key].name,
    short: localeCollection[key].short
  }))

  return (
    <LocaleContext.Provider
      value={{
        currentLang: localeState.currentLang,
        content: localeState.content,
        updateLocale: updateLocale,
        langsList: langsList
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

GlobalState.propTypes = propTypes

export default GlobalState
