import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import quizReducer from '../features/quiz/quizSlice'
import resultReducer from '../features/result/resultSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        quiz: quizReducer,
        result: resultReducer,
    }
})