import React from 'react'
import styles from './Hero.module.css'
type CoinItem = {
    icon: any;
    name: string;
    supply: string;
    input: string
}

const CoinsCard = ({ icon, name, supply }: CoinItem) => {
  return (
    <div className={`${styles.coinContainer} input`}>
        <div className={styles.coin}>
            <div className={styles.coinImage}><img src={icon}/></div>
            <div className={`${styles.coinName} ${name === "Olin" ? "font-medium text-orange-text xsm:text-sm" : ""}`}><h1>{name} -</h1></div>
            <div className={`${styles.coinSupply} ${name === "Olin" ? "font-medium text-orange-text xsm:text-sm" : ""}`}><h1>{supply}</h1></div>
        </div>
    </div>
  )
}

export default CoinsCard