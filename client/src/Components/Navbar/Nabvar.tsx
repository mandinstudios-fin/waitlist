import React, { useEffect } from 'react'
import styles from './Navbar.module.css'
import olivialogo from '../../assets/Images/olivialogo.png'
import gsap from 'gsap'

const Nabvar = () => {
  useEffect(() => {
    gsap.fromTo(".navItem", {y: "-100%", opacity: 0}, {y: 0, opacity: 1, duration: 1, stagger: 0.5})
  })

  return (
    <nav id='navbar' className={styles.navbarContainer}>
        <div className={styles.navbarBody}>
            <div className={`${styles.imageContainer} navItem`}><img src={olivialogo}/></div>
            <div><button onClick={() => window.open(`https://mandinstudios.com`)} className={`${styles.joinButton} navItem`}>Join Us</button></div>
        </div>
    </nav>
  )
}

export default Nabvar