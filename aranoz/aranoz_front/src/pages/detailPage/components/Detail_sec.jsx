import React from 'react'
import styles from './detailsec.module.scss'
import { useLocation } from 'react-router-dom'
const Detail_sec = () => {

    const postData = useLocation()

    const {image,title,price} = postData.state

  return (
    <div className={styles.detail}>
      <div className="container">
        <div className={styles.content}>
            <div className={styles.image}>
              <img src={image} alt="img" />
            </div>
            <div className={styles.texts}>
              <h5>{title}</h5>
              <span>${price}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail_sec
