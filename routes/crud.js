import express from "express";
import { addCrud, deleteCrud, getCrud, uptCrud } from "../controllers/crud.js";

const router = express.Router()

router.get('/', getCrud)

router.post('/', addCrud)

router.put('/:id', uptCrud)

router.delete('/:id', deleteCrud)

export default router