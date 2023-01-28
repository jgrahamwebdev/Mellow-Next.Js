import Link from 'next/link'
import React from 'react'

import styles from '../styles/Options.module.css'

function Options(props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.img} alt="" />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <Link href={props.link}><button className={styles.btn}>{props.button}</button></Link>
    </div>
  )
}

export default Options