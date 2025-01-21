import React, { useEffect, useState } from 'react'
import styles from './products.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk, postProductsThunk } from '../../../../redux/reducers/productsSlice'
import Procarts from '../../../../components/procarts/Procarts'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const dispatch = useDispatch()

    const nav = useNavigate()

    const {products,loading,error} = useSelector((state) => state.products)

    const addBasket = (data) => {
        dispatch(postProductsThunk(data))
    }

    const detailNav = (data) => {
        nav('/detail',{state:data})
    }

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])
    if(loading) return <p>Yuklenir...</p>
    if(error) return <p>Error</p>
    return (
        <div className={styles.products}>
            <div className="container">
                <div className={styles.content}>
                    <h2>Products</h2>
                    <div className={styles.carts}>
                        {products && products.map(item => <Procarts key={item.id} item={item} addToBasket = {() => addBasket(item)} detailNav = {() => detailNav(item)} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
