import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
        <div className={styles.footerBody}>
            <h1 className={styles.footerText} onClick={() => window.open(`https://mandinstudios.com/`)}>All Rights Reserved @mandinstudios.com</h1>
        </div>
    </section>
  )
}

export default Footer