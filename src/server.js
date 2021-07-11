import express from 'express'
import { createServer } from 'http'
import routes from './routes/index.route'

const startServer = () => {
  const app = express()
  app.use(express.json())
  app.use(routes.createRouter())

  const httpServer = createServer(app)
  const port = 6123
  httpServer.listen(port)
  console.log(`http server listening at http://localhost:${port}`)
}

export default { startServer }
