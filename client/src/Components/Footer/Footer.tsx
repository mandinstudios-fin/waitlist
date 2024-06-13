import React from 'react'
import styles from './Footer.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(".footer", {y: "100%", opacity: 0}, {y: 0, opacity: 1})
  })

  return (
    <section className={styles.footerContainer}>
        <div className={styles.footerBody}>
            <h1 className={`${styles.footerText} footer`} onClick={() => window.open(`https://mandinstudios.com/`)}>All Rights Reserved @mandinstudios.com</h1>
        </div>
    </section>
  )
}

export default Footer