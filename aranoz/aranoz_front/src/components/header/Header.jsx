import React from 'react'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaBars, FaRegHeart, FaShoppingBag, FaUser } from "react-icons/fa";
const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <Link to={'/'} className={styles.logo}>
                        <img src={logo} alt="lg" />
                    </Link>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>Shop</Link>
                        </li>
                        <li>
                            <Link>Pages</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                    <div className={styles.icons}>
                        <Link><CiSearch /></Link>
                        <Link><FaRegHeart /></Link>
                        <Link to={'/basket'}><FaShoppingBag /></Link>
                        <Link><FaBars /></Link>
                        <Link to={'/admin'}><FaUser /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
