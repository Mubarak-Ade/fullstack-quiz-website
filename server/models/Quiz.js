import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        A: { type: String, required: true },
        B: { type: String, required: true },
        C: { type: String, required: true },
        D: { type: String, required: true }
    },
    correctAnswer: {
        type: String,
        enum: ["A", "B", "C", "D"],
        required: true
    }
})

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    questions: [questionSchema],
    timeLimit: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
    }
});

quizSchema.statics.createQuiz = async function (title, category, questions, timeLimit, createdBy) {

    function validateQuiz() {
        if (!title || typeof title !== 'string') {
          return 'Title is required and must be a string.';
        }
        if (!category || typeof category !== 'string') {
          return 'Category is required and must be a string.';
        }
        if (!Array.isArray(questions) || questions.length === 0) {
          return 'At least one question is required.';
        }
        if (!createdBy || typeof createdBy !== 'string') {
          return 'createdBy (user ID) is required.';
        }
        if (timeLimit && (typeof timeLimit !== 'number' || timeLimit <= 0)) {
          return 'timeLimit must be a positive number if provided.';
        }
      
        for (const [index, question] of questions.entries()) {
          if (!question.text || typeof question.text !== 'string') {
            return `Question ${index + 1} text is required and must be a string.`;
          }
          const opts = question.options;
          if (
            !opts ||
            typeof opts.A !== 'string' ||
            typeof opts.B !== 'string' ||
            typeof opts.C !== 'string' ||
            typeof opts.D !== 'string'
          ) {
            return `Question ${index + 1} must have options A, B, C, and D as strings.`;
          }
          if (!['A', 'B', 'C', 'D'].includes(question.correctAnswer)) {
            return `Question ${index + 1} correctAnswer must be one of 'A', 'B', 'C', 'D'.`;
          }
        }
      
        // If no issues, return null meaning valid
        return null;
      }

      
    const quiz = await this.create({
        title,
        category,
        questions,
        timeLimit,
        createdBy
    })
    
    validateQuiz()

    return quiz
}


const Quiz = mongoose.model("Quiz",  quizSchema);

export default Quiz