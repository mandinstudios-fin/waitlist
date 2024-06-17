import React, { useEffect } from 'react'
import styles from './AboutUs.module.css'

type ItemCardProps = {
    title: string;
    description: string;
    className: string;
}

const AboutUsItemCard = ({title, description, className}: ItemCardProps) => {
    return (
        <div className={`${styles.cardContainer} ${className}`}>
            <div className={styles.cardBody}>
                <div className={styles.cardHeading}><h1>{title}</h1></div>
                <div className={styles.cardDescription}><p>{description}</p></div>
            </div>
        </div>
    
  )
}

export default AboutUsItemCard