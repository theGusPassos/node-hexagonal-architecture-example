import express from 'express'
import { createServer } from 'http'

const startServer = () => {
  const app = express()
  const routes = require('./routes/index.route').default
  app.use(routes)

  const httpServer = createServer(app)
  const port = 6123
  httpServer.listen(port)
  console.log(`http server listening at port ${port}`)
}

export default { startServer }
