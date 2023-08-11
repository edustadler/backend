import express from "express";
import { createData, deleteData, readData, updateData } from "../controllers/crudController.js";

const router = express.Router()

/* C */router.post('/api', createData)
/* R */router.get('/api', readData)
/* U */router.put('/api/:id', updateData)
/* D */router.delete('/api/:id', deleteData)




export default router