import React from 'react'

import styles from '../styles/Buy.module.css'

function Buy({img, price, detail, address}) {
  return (
    <div className={styles.container}>
        <div className={styles.homeBox}>
          <img className={styles.homeImg} src={img} alt="" />
          <div className={styles.homeInfo}>
            <h2 className={styles.homePrice}>{price}</h2>
            <h3 className={styles.homeDetail}>{detail}</h3>
            <h3 className={styles.homeAddress}>{address}</h3>
          </div>
        </div>
    </div>
  )
}

export default Buy