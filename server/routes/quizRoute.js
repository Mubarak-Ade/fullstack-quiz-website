// Path: server/routes/quizRoute.js
import express from 'express'
import { createQuiz, getQuestionById, getQuizById, getQuizzes, submitQuiz } from '../controllers/quizController.js'
import requireAuth from '../middleware/requireAuth.js'

const router = express.Router()

router.post("/create", requireAuth, createQuiz)
router.get("/", getQuizzes)
// router.get("?categories=Math", getQuizzes)
router.get("/:id", getQuizById)
router.get("/:quizId/question/:questionId", getQuestionById)
router.post("/:id/submit", requireAuth, submitQuiz)

export default router;