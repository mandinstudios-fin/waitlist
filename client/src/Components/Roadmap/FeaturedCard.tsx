import React, { useEffect } from 'react'
import { TfeaturedItems } from '../../utils'
import styles from './Roadmap.module.css'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const FeaturedCard = () => {
  return (
    <div id='card' className={styles.cardsBody}>
        <div className={`${styles.card} xsm:top-[5%] iphones:top-[5%] top-[5%] lg:top-[3%] xl:top-[5%] 2xl:top-[5%] 3xl:top-[5%]`} >
            <div className={styles.cardBody} style={{top:`calc((${1}*50)px)`}}>
                <div className={styles.cardHead}><h1>{'Smart Wallet'}</h1></div>
            </div>
            <div className={styles.cardDesc}><p>{'Initially, the Olin Token will be launched on the Base Chain. With the integrated Base Wallet in our application, users can effortlessly create their own self-custodial wallet using their fingertips. Additionally, with the latest Coinbase Smart Wallet enables users to create their wallets easily using passkeys.'}</p></div>
        </div>

        <div id='card' className={`${styles.card} xsm:top-[6%] iphones:top-[5%] top-[7%] lg:top-[8%] xl:top-[12%] 2xl:top-[13%] 3xl:top-[13%]`} >
            <div className={styles.cardBody} style={{top:`calc((${2}*50)px)`}}>
                <div className={styles.cardHead}><h1>{`Physical Crypto Gift Cards`}</h1></div>
            </div>
            <div className={styles.cardDesc}><p>{`In a pioneering move, we are introducing physical gift cards for crypto, allowing users to easily load and transfer tokens with unparalleled ease. These gift cards will be available for individuals and institutions alike, facilitating seamless crypto transfers through a familiar physical card model. Imagine the joy of presenting someone with a unique crypto gift, encapsulating the future of finance in a tangible form.`}</p></div>
        </div>

        <div id='card' className={`${styles.card} xsm:top-[0%] iphones:top-[5%] top-[5%] lg:top-[13%] xl:top-[13vw] 2xl:top-[21%] 3xl:top-[19%]`} >
            <div className={styles.cardBody} style={{top:`calc((${3}*50)px)`}}>
                <div className={styles.cardHead}><h1>{`Bridging the Fiat-Crypto Gap`}</h1></div>
            </div>
            <div className={styles.cardDesc}><p>{`We understand the importance of bridging the gap between traditional finance and the crypto world. That's why we're taking a leap forward by integrating on-ramp providers into our platform. With this groundbreaking feature, users can effortlessly convert their crypto coins into native fiat currencies with just a few clicks, providing unparalleled convenience and accessibility.`}</p></div>
        </div>
    </div>
  )
}

export default FeaturedCard