import express from 'express'
import routes from './routes/index.route'

const app = express()
app.use(express.json())
app.use(routes.createRouter())

export default app
