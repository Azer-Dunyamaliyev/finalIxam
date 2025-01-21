import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
})

const basketModel = mongoose.model('basket',basketSchema)

export default basketModel