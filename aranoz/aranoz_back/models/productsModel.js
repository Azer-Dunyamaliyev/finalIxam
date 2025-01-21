import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
})

const productsModel = mongoose.model('products',productsSchema)

export default productsModel