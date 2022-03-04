import React, { StrictMode } from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
