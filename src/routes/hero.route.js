import heroController from '../controllers/hero'
import asyncHandler from 'express-async-handler'

const addRoutes = (router) => {
  router.get('/heroes', asyncHandler(heroController.getAll))
  router.post('/heroes', asyncHandler(heroController.create))
}

export default { addRoutes }
