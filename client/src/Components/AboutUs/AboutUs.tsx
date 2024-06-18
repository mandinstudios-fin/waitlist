import React, { useEffect, useState } from 'react'
import styles from './AboutUs.module.css'
import { aboutItems } from '../../utils/index'
import AboutUsItemCard from './AboutUsItemCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.fromTo(".details", { y: "100%", opacity: 0 }, {y: 0, opacity: 1, stagger: 0.2, duration: 1})
    })

  return (
    <section className={styles.aboutContainer}>
        <div className={styles.aboutBody}>
            <div className={styles.mainDetails}>
                <div className={`${styles.mainDetails1} details`}><h1 onClick={() => navigate(`/`)}>Olin</h1></div>
                <div className={`${styles.mainDetails2} details`}><p>Olivia Native Token</p></div>
                <div className={`${styles.mainDetails3} details`}><p>Olivia India is thrilled to introduce <span>Olin</span>, our groundbreaking native cryptocurrency token that will redefine the way you trade and interact with our platform. Olin Token encapsulates our unwavering commitment to innovation, community empowerment, and democratized access to the crypto realm.</p></div>
            </div>

            <div className={styles.itemsContainer}>
                {
                    aboutItems.map((about, i) => <AboutUsItemCard key={i} {...about} className={`details`}/>)
                }
            </div>

            <div className={styles.details}>
                <div className={`${styles.details1} details`}><h1>Join us on this exciting journey as we reshape the crypto trading landscape with Olin Token. Embrace the future of finance, where innovation, community, and accessibility converge to create a truly empowering experience.</h1></div>
                <div className={`${styles.details2} details`}><h1>Stay tuned for more updates and exciting announcements from the Olivia <span>In</span><span>d</span><span>ia</span> team!</h1></div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs