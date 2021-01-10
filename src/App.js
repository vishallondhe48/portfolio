
import React from 'react'
import './styles.scss'
import Nav from './components/Nav'
import HeroSection from './pages/HeroSection'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav />
      {/* <HeroSection /> */}
      {/* <Portfolio /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </ >
  )
}

export default App
