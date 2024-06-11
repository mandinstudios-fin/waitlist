import React, { Fragment } from 'react'
import dottedbg from '../assets/Images/dotted.svg'
import Nabvar from '../Components/Navbar/Nabvar'
import Hero from '../Components/Hero/Hero'

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${dottedbg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
        <Nabvar />
        <Hero />
    </div>
  )
}

export default Home