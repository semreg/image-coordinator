import localeCollection from '../static/locale/index'

const updateLocale = (locale, state) => {
  return { ...state, currentLang: locale, content: localeCollection[locale] }
}

export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOCALE': {
      console.log(`Lang updated to ${action.locale}`)
      return updateLocale(action.locale, state)
    }

    default: {
      return state
    }
  }
}
