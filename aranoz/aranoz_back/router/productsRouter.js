import express from "express";
import { createProducts, deleteProducts, getProducts } from "../controller/control.js";

const router = express.Router()

router.route('/').get(getProducts).post(createProducts)
router.route('/:id').delete(deleteProducts)


export default router