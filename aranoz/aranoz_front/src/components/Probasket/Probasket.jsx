import React from 'react'
import styles from './probasket.module.scss'
const Probasket = ({item,deleteToBasket }) => {
    return (
        <div className={styles.cart}>
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <span>${item.price}</span>
            <button onClick={deleteToBasket}>Delete</button>
        </div>
    )
}

export default Probasket
