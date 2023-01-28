import React from 'react'

import styles from '../styles/Contact.module.css'

function contact() {
  return (
    <div className={styles.container}>
     <div className={styles.contactBox}>
       <h1 className={styles.title}>Contact Us:</h1>
       <input type="text" placeholder='Name' className={styles.input}/>
       <input type="text" placeholder='Email' className={styles.input}/>
       <h3 className={styles.subtitle}>Contact Subject:</h3>
       <select className={styles.subject}>
          <option value="0" className={styles.subjectItem}></option>
          <option value="1" className={styles.subjectItem}>Buy</option>
          <option value="2" className={styles.subjectItem}>Sell</option>
          <option value="3" className={styles.subjectItem}>Rent</option>
          <option value="4" className={styles.subjectItem}>Find An Agent</option>
        </select>
       <textarea name="" id="" cols="30" rows="10" placeholder='Message' className={styles.message}></textarea>
        <button className={styles.btn}>Submit</button>
     </div>
    </div>
  )
}

export default contact