// Path: server/routes/resultRoute.js
import express from 'express'
import { Result} from '../controllers/resultController.js'
import requireAuth from '../middleware/requireAuth.js'

const router = express.Router()

router.get("/results", getQuizById)
router.get("/results/:id/", getQuestionById)

export default router;