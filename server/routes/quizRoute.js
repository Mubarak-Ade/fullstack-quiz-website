// Path: server/routes/quizRoute.js
import express from 'express'
import { createQuiz, deleteQuestion, deleteQuizById, editQuestions, getQuestionById, getQuestions, getQuizById, getQuizzes, submitQuiz } from '../controllers/quizController.js'
import requireAuth from '../middleware/requireAuth.js'
import isAdmin from '../middleware/isAdmin.js'

const router = express.Router()

router.post("/create", requireAuth, createQuiz)
router.get("/", requireAuth, getQuizzes)
// router.get("?categories=Math", getQuizzes)
router.get("/questions", getQuestions)
router.get("/:id", requireAuth, getQuizById)
router.delete("/:id", requireAuth, deleteQuizById)
router.get("/:quizId/question/:questionId", getQuestionById)
router.post("/:id/submit", requireAuth, submitQuiz)
router.put("/:quizId/question/:questionId", editQuestions)
router.delete("/:quizId/question/:questionId", deleteQuestion)

export default router;