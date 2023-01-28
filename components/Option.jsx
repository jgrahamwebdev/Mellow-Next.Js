import React from 'react';
import Options from './Options';

import styles from '../styles/Options.module.css'

function Option(props) {

  const optionboxes = [
    {
      id: 1,
      image: '/img/buy.jpg',
      title: 'Buy A Home',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, vel a eos commodi vero distinctio magni itaque dolorum ex enim alias.',
      button: 'Search Homes',
      link: '/buy'
    },
    {
      id: 2,
      image: '/img/sell.jpg',
      title: 'Sell A Home',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, vel a eos commodi vero distinctio magni itaque dolorum ex enim alias.',
      button: 'See Options',
      link: '/sell'
    },
    {
      id: 3,
      image: '/img/rent.jpg',
      title: 'Rent A Home',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, vel a eos commodi vero distinctio magni itaque dolorum ex enim alias.',
      button: 'Find Rentals',
      link: '/rent'
    }
  ];

  return (
    <div className={styles.container}>

      {optionboxes.map(function (items) {
        return <Options key={items.id} img={items.image} title={items.title} description={items.description} button={items.button} link={items.link}/>
      })}
      
    </div>
  )
}

export default Option