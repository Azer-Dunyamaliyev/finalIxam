import React from 'react'
import styles from './shop.module.scss'
import { Link } from 'react-router-dom'
import img1 from '../../../../assets/images/product_1.png'
import img2 from '../../../../assets/images/product_2.png'
import img3 from '../../../../assets/images/product_3.png'
const Shop = () => {
    return (
        <div className={styles.shop}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.title}>
                        <div className={styles.main}>
                            <h2>Best Sellers</h2>
                            <span>Shop</span>
                        </div>
                        <ul>
                            <li>
                                <Link>Next</Link>
                            </li>
                            <li>
                                <Link>Previous</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.carts}>
                        <div className={styles.cart}>
                            <img src={img1} alt="img" />
                            <h5>Quartz Belt Watch</h5>
                            <span>$150</span>
                        </div>
                        <div className={styles.cart}>
                            <img src={img2} alt="img" />
                            <h5>Quartz Belt Watch</h5>
                            <span>$150</span>
                        </div>
                        <div className={styles.cart}>
                            <img src={img3} alt="img" />
                            <h5>Quartz Belt Watch</h5>
                            <span>$150</span>
                        </div>
                        <div className={styles.cart}>
                            <img src={img1} alt="img" />
                            <h5>Quartz Belt Watch</h5>
                            <span>$150</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
