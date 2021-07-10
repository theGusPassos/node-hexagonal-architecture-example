import { Router } from 'express'
import { getAll, create } from '../controllers/hero'

const router = Router({ mergeParams: true })

router.route('/').get(getAll)
router.use('/').post(create)

export default router
