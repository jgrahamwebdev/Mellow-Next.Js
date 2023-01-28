import React from 'react'

import styles from '../styles/Info.module.css'

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.one}>
          <img src="/img/home-1.jpg" alt="" />
        </div>
        <div className={styles.two}>
          <img src="/img/interior-4.jpg" alt="" />
        </div>
        <div className={styles.three}>
          <img src="/img/home-4.jpg" alt="" />
        </div>
        <div className={styles.four}>
          <img src="/img/interior-2.jpg" alt="" />
        </div>
        <div className={styles.five}>
          <img src="/img/interior-3.jpg" alt="" />
        </div>
        <div className={styles.six}>
          <img src="/img/home-3.jpg" alt="" />
        </div>
        <div className={styles.seven}>
          <img src="/img/home-5.jpg" alt="" />
        </div>
        <div className={styles.eight}>
          <img src="/img/interior-5.jpg" alt="" />
        </div>
        <div className={styles.nine}>
          <img src="/img/home-6.jpg" alt="" />
        </div>
        <div className={styles.ten}>
          <img src="/img/interior-9.jpg" alt="" />
        </div>
        <div className={styles.eleven}>
          <img className={styles.logo} src="/img/logo.png" alt="" />
        </div>
        <div className={styles.twelve}>
          <img src="/img/home-8.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Info