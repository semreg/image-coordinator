import React from 'react'
import ReactDOM from 'react-dom'

// MDB
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.querySelector('#root'))

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}
