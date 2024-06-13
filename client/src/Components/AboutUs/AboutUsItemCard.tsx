import React, { useEffect } from 'react'
import styles from './AboutUs.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type ItemCardProps = {
    title: string;
    description: string;
}

const AboutUsItemCard = ({title, description}: ItemCardProps) => {
    useGSAP(() => {
        gsap.fromTo(".card", { y: "100%", opacity: 0 }, {y: 0, opacity: 1, stagger: 0.3, duration: 0.9})
    })
    return (
        <div className={`${styles.cardContainer} card`}>
            <div className={styles.cardBody}>
                <div className={styles.cardHeading}><h1>{title}</h1></div>
                <div className={styles.cardDescription}><p>{description}</p></div>
            </div>
        </div>
    
  )
}

export default AboutUsItemCard