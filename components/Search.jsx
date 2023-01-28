import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai';

import styles from '../styles/Search.module.css'

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input className={styles.searchBar} type="text" placeholder='Enter an address, city, or ZIP code'/>
        <button className={styles.searchBtn}><AiOutlineSearch className={styles.icon}/></button>
      </div>
    </div>
  )
}

export default Search