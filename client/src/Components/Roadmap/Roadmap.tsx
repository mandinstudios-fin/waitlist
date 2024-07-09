import React, { useEffect } from 'react'
import styles from './Roadmap.module.css'
import { featuredItems } from '../../utils'
import FeaturedCard from './FeaturedCard'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

const Roadmap = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('#card', { y: '100%', opacity: 0 }, { 
            y: 0,
            opacity: 1,
            duration: 1.3,
            stagger: 0.4,
            scrollTrigger: {
                trigger: '#hero', // Element that triggers the animation
                start: 'bottom center', // Start the animation when the top of the trigger element reaches the center of the viewport
                end: 'center center', // End the animation when the bottom of the trigger element reaches the center of the viewport
            }
        })
    })

  return (
    <section className={styles.sectionContainer} id='sectionContainer'>
        <div className={styles.sectionBody}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerHeading}>Revolutionizing Crypto Trading <br className='block md:hidden'/> on Olivia</h1>
                <div className={styles.headerDescContainer}>
                    <p className={styles.headerDesc}>Olivia India is thrilled to introduce Olin, our groundbreaking native cryptocurrency token that will redefine the way you trade and interact with our platform. Olin Token encapsulates our unwavering commitment to innovation, community empowerment, and democratized access to the crypto realm.</p>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.cardsBody}>
                    <FeaturedCard />
                </div>
            </div>

            <div className={styles.lastContainer}>
                <p className='lg:text-xl text-orange-text'>Join us on this exciting journey as we reshape the crypto trading landscape with Olin Token. Embrace the future of finance, where innovation, community, and accessibility converge to create a truly empowering experience.</p>
                <button onClick={() => {
                    const hero = document.getElementById('navbar');
                    if (hero) {
                        hero.scrollIntoView({ behavior: 'smooth' });
                    }
                }} className={styles.joinbutton}>Join Waitlist <MdOutlineArrowRightAlt className={styles.joinIcon}/></button>
            </div>

            {/* <div className={styles.lastContainer}>
                <div><p>Join us on this exciting journey as we reshape the crypto trading landscape with Olin Token. Embrace the future of finance, where innovation, community, and accessibility converge to create a truly empowering experience.</p></div>
                <div className={styles.join}>
                <button onClick={() => {
                    const hero = document.getElementById('navbar');
                    if (hero) {
                        hero.scrollIntoView({ behavior: 'smooth' });
                    }
                }} className={styles.joinbutton}>Join Waitlist <MdOutlineArrowRightAlt className={styles.joinIcon}/></button>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Roadmap