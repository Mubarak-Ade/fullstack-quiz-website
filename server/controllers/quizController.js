// Path: server/controllers/quizController.js
import Quiz from "../models/Quiz.js"
import Result from "../models/QuizResult.js"
import User from "../models/User.js"

export const createQuiz = async (req, res) => {
    const { title, category, questions, timeLimit, createdBy } = req.body

    try {
        const quiz = await Quiz.createQuiz(title, category, questions, timeLimit, createdBy)

        res.status(200).json(quiz);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }

}

export const getQuizzes = async (req, res) => {

    try {
        const quiz = await Quiz.find({})

        res.status(200).json(quiz)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getQuizById = async (req, res) => {
    const { id } = req.params

    try {
        const quiz = await Quiz.findById(id)

        quiz.questions = quiz.questions.map((q) => {
            const { correctAnswer, ...rest } = q
            return rest
        })
        res.status(200).json(quiz)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getQuestionById = async (req, res) => {
    const { quizId, questionId } = req.params

    try {
        const quiz = await Quiz.findById(quizId)

        if (!quiz) {
            return res.status(404).json({message: "Question not found in any quiz"})
        }

        const question = quiz.questions.id(questionId)

        if (!question) {
            return res.status(404).json({message: "Question not found"})
        }

        const {correctAnswer, ...questionData} = question.toObject()

        res.status(200).json(questionData)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const submitQuiz = async (req, res) => {
    const { id } = req.params
    const { answers } = req.body

    try {
        const quiz = await Quiz.findById(id)
        // const user = await User.findById(id)

        if (!quiz) {
            res.status(404).json({ message: "Quiz not found" })
        }
        let score = 0

        quiz.questions.forEach((question, index) => {
            const userAnswer = answers[index]
            if (userAnswer && userAnswer === question.correctAnswer) {
                score++
            }
        })
        const total = quiz.questions.length;
        const percentage = (score / total) * 100


        const result = await Result.create({
            user: req.user.id,
            quiz: quiz._id,
            score,
            total,
            percentage,
            answers,
            submittedAt: new Date()
        })
        await result.populate("user", "username")
        await result.populate("quiz", "title")

        res.status(200).json({ score, total, percentage, result })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
