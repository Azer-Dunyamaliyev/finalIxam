import React from 'react'
import Layout from '../../layout/Layout'
import Main from './components/main/Main'
import Shop from './components/shop/Shop'
import Log from './components/log/Log'
import Sponsor from './components/sponsor/Sponsor'
import Products from './components/products/Products'

const Home = () => {
  return (
    <Layout>
        <Main />
        <Products />
        <Shop />
        <Log />
        <Sponsor />
    </Layout>
  )
}

export default Home
