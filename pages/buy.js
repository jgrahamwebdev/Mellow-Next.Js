
import Buy from '../components/Buy';

import { homes } from '../data';

export const getStaticProps = async () => {
  return {
    props: { 
      home: homes,
     },
  }
};

import styles from '../styles/Buy.module.css';

function buy({home}) {
  return (
  <div>
    <h1 className={styles.header}>Homes For Sale</h1>
    <div className={styles.body}>

      {home.map((item) => (
        <Buy key={item.id} img={item.img} price={item.price} detail={item.detail} address={item.address}/>
      ))}     
    </div>
  </div>
  )
}


export default buy