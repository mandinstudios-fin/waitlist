import React from 'react'
import styles from './Loader.module.css'
import olivideo from '../../assets/Images/olivideo.mp4'
import oligif from '../../assets/Images/olivideo-unscreen.gif'

const Loader = () => {
  return (
    <section className={styles.loaderContainer}>
        {/* <video autoPlay loop muted src={olivideo}/> */}
        <img src={oligif}/>
    </section>
  )
}

export default Loader