import React from 'react'

import styles from '../styles/Newsletter.module.css'

function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.newsletterBox}>
        <h1 className={styles.title}>Sign Up For Our Monthly Newsletter!</h1>
        <input type="text" placeholder='Name' className={styles.input}/>
        <input type="text" placeholder='Email' className={styles.input}/>
        <button className={styles.btn}>Sign Up</button>
      </div>
    </div>
  )
}

export default Newsletter