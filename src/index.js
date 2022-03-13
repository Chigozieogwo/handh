import React from 'react'
import ReactDOM from 'react-dom'
// import 'flowbite';
import './index.css'
import Header from './components/header.js'
import Footer from './components/Footer.js'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
