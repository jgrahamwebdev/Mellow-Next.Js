import React from 'react'

import styles from '../styles/Agent.module.css';

function Agent({img, name, company, location, stars, experience}) {
  return (
    <div className={styles.agentCard}>
      <img className={styles.agentImg} src={img} alt="" />
      <h2 className={styles.agentName}>{name}</h2>
      <h3 className={styles.agentCompany}>{company}</h3>
      <h3 className={styles.agentLocation}>{location}</h3>
      <h3 className={styles.agentStars}>{stars}</h3>
      <h3 className={styles.agentExperience}>{experience}</h3>
      <button className={styles.contactBtn}>Contact Now</button>
    </div>
  )
}

export default Agent