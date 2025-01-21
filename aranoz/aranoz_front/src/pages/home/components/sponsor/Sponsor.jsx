import React from 'react'
import styles from './sponsor.module.scss'
import img1 from '../../../../assets/images/client_logo_1.png'
import img2 from '../../../../assets/images/client_logo_2.png'
import img3 from '../../../../assets/images/client_logo_3.png'
import img4 from '../../../../assets/images/client_logo_4.png'
import img5 from '../../../../assets/images/client_logo_5.png'
const Sponsor = () => {
  return (
    <div className={styles.sponsor}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.carts}>
                        <div className={styles.cart}>
                            <img src={img1} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img2} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img3} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img4} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img5} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img1} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img2} alt="img" />
                        </div>
                        <div className={styles.cart}>
                            <img src={img3} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Sponsor
