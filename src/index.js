import 'dotenv/config'
import express from 'express'
import path from 'path'
import cartsRouter from './routes/carts.routes.js'
import prodRouter from './routes/prod.routes.js'
import mongoose from 'mongoose'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import cartModel from './models/cart.models.js'

const app = express();
const PORT = 8080

mongoose.connect(process.env.MONGO_URL)
.then(async () => {
    console.log("DB conectada")
        // await cartModel.create({})
    })
.catch((error) => console.log('Error en conexion', error))

app.listen(PORT,() => {console.log(`Server on port ${PORT}`)})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, './views'))


app.use('/static', express.static(path.join(__dirname , '/public')))
app.use('/api/products', prodRouter)
app.use('/api/carts', cartsRouter)