import React, { useEffect, useState } from 'react'
import styles from './admin.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAdminThunk, getAdminThunk, postAdminThunk } from '../../redux/reducers/adminSlice'
import { FaRegTrashAlt } from "react-icons/fa";
import { useFormik } from 'formik';
const Admin = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.admin)

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            price: ''
        },
        onSubmit: values => {

            if (values.image === '' || values.title === '' || values.price === '') {
                alert('Melumat yoxdur')
            } else if (isNaN(values.price)) {
                alert('Bir sayi gir')
            } else {
                dispatch(postAdminThunk(values))
                    .unwrap()
                    .then(() => {
                        dispatch(getAdminThunk())
                    })
                formik.resetForm()
            }
        },
    });

    const [text,setText] = useState('')
    const [sort,setSort] = useState('')

    const filteredData = products
                                .filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
                                .sort((a,b) => {
                                    if (sort === 'asc') {
                                        return b.price - a.price
                                    } else if (sort === 'desc') {
                                        return a.price - b.price
                                    }
                                })
    const deleteProducts = (id) => {
        dispatch(deleteAdminThunk(id))
    }

    useEffect(() => {
        dispatch(getAdminThunk())
    }, [dispatch])
    if (loading) return <p>Yuklenir...</p>
    if (error) return <p>Error</p>
    return (
        <div className={styles.admin}>
            <div className="container">
                <div className={styles.content}>
                    <h2>Admin Panel</h2>

                    <form onSubmit={formik.handleSubmit}>
                        <input
                            id="image"
                            name="image"
                            placeholder='Image'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                        <input
                            id="title"
                            name="title"
                            placeholder='Title'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        <input
                            id="price"
                            name="price"
                            placeholder='Price'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        />

                        <button type="submit">Submit</button>
                    </form>

                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder='Search' value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={() => setSort('asc')}>Hight to Low</button>
                        <button onClick={() => setSort('desc')}>Lower to Hight</button>
                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData && filteredData.map(item => {
                                return <tr>
                                    <td>
                                        <img src={item.image} alt="img" />
                                    </td>
                                    <td>
                                        <h5>{item.title}</h5>
                                    </td>
                                    <td>
                                        <span>${item.price}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteProducts(item._id)}><FaRegTrashAlt /></button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin
