import React from 'react'
import styles from './Loader.module.css'
import oligif from '../../assets/Images/loadera.mp4'

const Loader = () => {
  return (
    <section className={styles.loaderContainer}>
      {/* <video autoPlay loop muted src={olivideo}/> */}
      <div className={styles.loaderBody}>
        {/* <img src={oligif}/> */}
        <video autoPlay loop muted src={oligif}/>
      </div>
      
    </section>
  )
}

export default Loader