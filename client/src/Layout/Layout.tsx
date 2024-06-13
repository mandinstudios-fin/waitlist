import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Nabvar from '../Components/Navbar/Nabvar'
import Footer from '../Components/Footer/Footer'
import dottedbg from '../assets/Images/dotted.svg'

const Layout = () => {
  return (
    <div style={{backgroundImage: `url(${dottedbg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
    
  )
}

export default Layout