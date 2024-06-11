import React from 'react'
import styles from './Loader.module.css'
import oligif from '../../assets/Images/olivideo-unscreen.gif'
import loader from '../../assets/Images/loader.gif'

const Loader = () => {
  return (
    <section className={styles.loaderContainer}>
        {/* <video autoPlay loop muted src={olivideo}/> */}
        <img src={oligif}/>
    </section>
  )
}

export default Loader