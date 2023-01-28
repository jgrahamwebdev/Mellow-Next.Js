import React from 'react'

import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

import styles from '../styles/Footer.module.css'

function Footer() {

  const style = { color: "#00a838", fontSize: "30px", marginRight: "10px", cursor: "pointer"}

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.logo} src="img/logo.png" alt="" />
        <h1 className={styles.title}>Mellow</h1>
        <div className={styles.iconBox}>
          <h4 className={styles.iconTitle}>Follow Us:</h4>
          <BsTwitter style={style}/>
          <BsInstagram style={style}/>
          <BsYoutube style={style}/>
        </div>
        <h4 className={styles.copyright}>© 2022 Mellow</h4>
      </div>
      <img className={styles.banner} src="img/banner2.svg" alt="" />
    </div>
  )
}

export default Footer