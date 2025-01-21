import React from 'react'
import styles from './log.module.scss'
const Log = () => {
    return (
        <div className={styles.log}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <span>
                            Join Our Newsletter
                        </span>
                        <h3>
                            Subscribe to get Updated with new offers
                        </h3>
                    </div>
                    <form action="">
                        <input type="email" placeholder='Enter Email Adress' />
                        <button>SUBSCRIBE NOW</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Log
