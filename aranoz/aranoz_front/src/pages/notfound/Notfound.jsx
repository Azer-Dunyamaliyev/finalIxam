import React from 'react'
import styles from './notfound.module.scss'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {

    const navigate = useNavigate()

  return (
    <div className={styles.text}>
      <p>NotFound</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Notfound
