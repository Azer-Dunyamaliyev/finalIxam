import productsModel from "../models/productsModel.js"
import basketModel from '../models/basketModel.js'


// GET

const getProducts = async (req,res) => {
    const products = await productsModel.find()
    res.json(products)
}

const getBasket = async (req,res) => {
    const products = await basketModel.find()
    res.json(products)
}

// POST

const createProducts = async (req,res) => {
    const newproducts = req.body
    await productsModel.create(newproducts)
    res.json(newproducts)
}

const createBasket = async (req,res) => {
    try {
        const newproducts = req.body
        await basketModel.create(newproducts)
        res.json(newproducts)
    } catch (error) {
        console.log("POST error");
    }
}

// DELETE

const deleteProducts = async (req,res) => {
    const {id}= req.params
    await productsModel.findByIdAndDelete(id)
    res.json('Data deleted')
}

const deleteBasket = async (req,res) => {
    const {id}= req.params
    await basketModel.findByIdAndDelete(id)
    res.json('Data deleted')
}

export {getProducts,createProducts,deleteProducts,getBasket,createBasket,deleteBasket}