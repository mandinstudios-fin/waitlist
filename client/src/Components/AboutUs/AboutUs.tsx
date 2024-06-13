import React from 'react'
import styles from './AboutUs.module.css'
import { aboutItems } from '../../utils/index'
import AboutUsItemCard from './AboutUsItemCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutUs = () => {
    useGSAP(() => {
        gsap.fromTo(".details", { y: "100%", opacity: 0 }, {y: 0, opacity: 1, stagger: 0.5})
    })

  return (
    <section className={styles.aboutContainer}>
        <div className={styles.aboutBody}>
            <div className={styles.itemsContainer}>
                {
                    aboutItems.map((about, i) => <AboutUsItemCard key={i} {...about}/>)
                }
            </div>

            <div className={styles.details}>
                <div className={`${styles.details1} details`}><h1>Join us on this exciting journey as we reshape the crypto trading landscape with Olin Token. Embrace the future of finance, where innovation, community, and accessibility converge to create a truly empowering experience.</h1></div>
                <div className={`${styles.details2} details`}><h1>Stay tuned for more updates and exciting announcements from the Olivia India team!</h1></div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs