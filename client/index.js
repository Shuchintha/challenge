import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'regenerator-runtime/runtime'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import App from './src/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
