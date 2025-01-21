import React from 'react'
import styles from './procarts.module.scss'
const Procarts = ({ item, addToBasket, detailNav }) => {
  return (
    <div className={styles.cart}>
      <button className={styles.btn} onClick={detailNav}>
        <div className={styles.image}>
          <img src={item.image} alt="" />
        </div>
      </button>
      <h5>{item.title}</h5>
      <span>${item.price}</span>
      <button onClick={addToBasket}>AddToCard</button>
    </div>
  )
}

export default Procarts
