import React from 'react'
import styles from './Footer.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(".footer", {y: "100%", opacity: 0}, {y: 0, opacity: 1, duration: 1})
  })

  return (
    <div className={styles.lastContainer}>
      <p className='lg:text-xl text-orange-text'>Join us on this exciting journey as we reshape the crypto trading landscape with Olin Token. Embrace the future of finance, where innovation, community, and accessibility converge to create a truly empowering experience.</p>
      <button onClick={() => {
          const hero = document.getElementById('navbar');
          if (hero) {
              hero.scrollIntoView({ behavior: 'smooth' });
          }
      }} className={styles.joinbutton}>Join Waitlist <MdOutlineArrowRightAlt className={styles.joinIcon}/></button>
    </div>
  )
}

export default Footer