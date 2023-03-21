import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)

