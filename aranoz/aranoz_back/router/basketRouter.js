import express from "express";
import { createBasket, deleteBasket, getBasket } from "../controller/control.js";

const router = express.Router()

router.route('/').get(getBasket).post(createBasket)
router.route('/:id').delete(deleteBasket)


export default router