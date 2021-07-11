import heroController from '../controllers/hero'

const addRoutes = (router) => {
  router.get('/heroes', heroController.getAll)
  router.post('/heroes', heroController.create)
}

export default { addRoutes }
