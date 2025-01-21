import React, { useEffect } from 'react'
import styles from './basketpro.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../../../redux/reducers/basketSlice'
import Probasket from '../../../../components/Probasket/Probasket'
const Basketpro = () => {
    const dispatch = useDispatch()

    const { products, loading, error } = useSelector((state) => state.basket)

    const deleteBasket = (id) => {
        dispatch(deleteBasketThunk(id))
    }

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [dispatch])
    if (loading) return <p>Yuklenir...</p>
    if (error) return <p>Error</p>
    return (
        <div className={styles.products}>
            <div className="container">
                <div className={styles.content}>
                    <h2>Basket</h2>
                    <div className={styles.carts}>
                        {products && products.map(item => <Probasket key={item.id} item={item} deleteToBasket = {() => deleteBasket(item._id)} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basketpro
