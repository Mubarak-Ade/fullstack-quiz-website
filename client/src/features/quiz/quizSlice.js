import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllQuiz, getQuizById } from "../auth/reduxThunk";

const API_URL = 'htt://localhost:4000/api/quiz/'

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzes: [],
        currentQuiz: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllQuiz.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getAllQuiz.fulfilled, (state, action) => {
            state.loading = false
            state.quizzes = action.payload
        })
        .addCase(getAllQuiz.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(getQuizById.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getQuizById.fulfilled, (state, action) => {
            state.loading = false
            state.currentQuiz = action.payload
        })
        .addCase(getQuizById.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default quizSlice.reducer