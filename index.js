import express from "express";
import cors from "cors";
import crudRoutes from './routes/crudRoutes.js'



const app = express()

app.use(express.json())
app.use(cors())

app.use('/', crudRoutes)


app.listen(9900)