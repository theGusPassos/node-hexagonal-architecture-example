import { createServer } from 'http'
import app from 'app'

const startServer = () => {
  const httpServer = createServer(app)
  const port = 6123
  httpServer.listen(port)
  console.log(`http server listening at http://localhost:${port}`)
}

export default { startServer }
