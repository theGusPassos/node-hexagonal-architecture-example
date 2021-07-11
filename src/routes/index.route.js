import { Router } from 'express'
import heroes from './hero.route'

const createRouter = () => {
  const router = Router()

  heroes.addRoutes(router)

  router.get('/', (_, res) =>
    res.send('Sample Node API with hexagonal architecture'),
  )

  router.get('/health', (_, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    }
    res.send(JSON.stringify(healthcheck))
  })

  return router
}

export default { createRouter }
