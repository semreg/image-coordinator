import { createContext } from 'react'

export default createContext({
  currentLang: null,
  content: {},
  updateLocale: locale => {}
})
