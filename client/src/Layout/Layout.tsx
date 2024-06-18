import React from 'react'
import styles from './Layout.module.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Nabvar from '../Components/Navbar/Nabvar'
import Footer from '../Components/Footer/Footer'
import AnimatedTextBackground from '../Components/AnimatedTextBackground/AnimatedTextBackground'
import dottedbg from '../assets/Images/dotted.svg'

const Layout = () => {
  return (
    <div className={styles.layout} style={{ position: 'relative', height: '100vh' }}>
      <AnimatedTextBackground />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Nabvar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </div>
  )
}

export default Layout