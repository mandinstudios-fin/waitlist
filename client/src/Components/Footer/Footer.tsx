import React from 'react'
import styles from './Footer.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(".footer", {y: "100%", opacity: 0}, {y: 0, opacity: 1, duration: 1})
  })

  return (
    <section className={`${styles.footerContainer} footer`}>
      <div className={styles.footerBody}>
        <div><p>Join us on this exciting journey as we reshape the crypto trading landscape with Olin Token. Embrace the future of finance, where innovation, community, and accessibility converge to create a truly empowering experience.</p></div>
        <div><p></p></div>
      </div>
    </section>
  )
}

export default Footer