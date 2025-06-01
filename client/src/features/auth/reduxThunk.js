import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = 'http://localhost:4000/api/user'

export const loginUser = createAsyncThunk('auth/login', 
    async (userData, thunkAPI) => {
        const { email, password } = userData
    try {
        const res = await axios.post(`${API_URL}/login`, userData)
        const {username, email} = res.data
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify({username,email}))
        console.log({username, email})
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const registerUser = createAsyncThunk('auth/register', 
    async (userData, thunkAPI) => {
        const { username, email, password } = userData
    try {
        const res = await axios.post(`${API_URL}/register`, userData)
        const {username, email} = res.data
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify({username,email}))
        console.log({username, email})
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const getAllQuiz = createAsyncThunk('quiz/getQuizzes', 
    async (_, thunkApi) => {
        try {
            const res = await axios.get('http://localhost:4000/api/quiz/')
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const getQuizById = createAsyncThunk('quiz/getQuiz', 
    async (quizId, thunkApi) => {
        try {
            const res = await axios.get(`http://localhost:4000/api/quiz/${quizId}`)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
) 