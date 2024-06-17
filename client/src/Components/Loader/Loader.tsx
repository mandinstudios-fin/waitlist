import React from 'react'
import styles from './Loader.module.css'
import oligif from '../../assets/Images/loader.gif'

const Loader = () => {
  return (
    <section className={styles.loaderContainer}>
      {/* <video autoPlay loop muted src={olivideo}/> */}
      <div className={styles.loaderBody}>
        <img src={oligif}/>
      </div>
      
    </section>
  )
}

export default Loader