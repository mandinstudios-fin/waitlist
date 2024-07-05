import React from 'react'
import styles from './Roadmap.module.css'
import { featuredItems } from '../../utils'
import FeaturedCard from './FeaturedCard'

const Roadmap = () => {
  return (
    <section className={styles.sectionContainer}>
        <div className={styles.sectionBody}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerHeading}>Revolutionizing Crypto Trading <br className='block lg:hidden'/> on Olivia</h1>
                <p className={styles.headerDesc}>Olivia India is thrilled to introduce Olin, our groundbreaking native cryptocurrency token that will redefine the way you trade and interact with our platform. Olin Token encapsulates our unwavering commitment to innovation, community empowerment, and democratized access to the crypto realm.</p>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.cardsBody}>
                    <FeaturedCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Roadmap