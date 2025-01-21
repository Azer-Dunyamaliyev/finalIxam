import React from 'react'
import styles from './main.module.scss'
import sofa from '../../../../assets/images/banner_img.png'
const Main = () => {
    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <h1>
                            Wood & <span>Cloth Sofa</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quisquam,
                            sit rem laudantium blanditiis ex, nobis illum cupiditate consectetur repudiandae beatae,
                            et quo porro voluptates odit architecto maiores deleniti.
                        </p>
                        <button>BUY NOW</button>
                    </div>
                    <div className={styles.image}>
                        <img src={sofa} alt="sf" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
