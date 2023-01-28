
import Agent from '../components/Agent';

import { agents } from '../data';

export const getStaticProps = async () => {
  return {
    props: { 
      agent: agents,
     },
  }
};

import styles from '../styles/Agent.module.css';

function agent({agent}) {
  return (
  <div>
    <h1 className={styles.header}>Find An Agent</h1>
    <div className={styles.body}>

      {agent.map((item) => (
        <Agent key={item.id} img={item.img} name={item.name} company={item.company} location={item.location} stars={item.stars} experience={item.experience}/>
      ))}     
    </div>
  </div>
  )
}


export default agent