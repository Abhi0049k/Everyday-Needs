import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Router from './pages/Router'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
