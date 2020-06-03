import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import routes from './routes'

dotenv.config()
const app = express()
app.use(express.json())
app.use(routes)
app.use(cors())
app.use('/assets', express.static(path.resolve(__dirname, '..', 'assets')))
app.listen(process.env.PORT, () => console.log(`Executando em ${process.env.APP_URL}`))