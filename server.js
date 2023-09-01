import express from 'express'
import dotenv from 'dotenv/config'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/User.Routes.js'
import categoryRoutes from './routes/Category.Routes.js'
import connectDB from './config/db.js'
import colors from 'colors'

connectDB()
const port = process.env.PORT
const app = express()

app.use(errorHandler)
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('api/categories', categoryRoutes)

app.listen(port, ()=> console.log(`Server started on port ${port}`.cyan.underline) )
