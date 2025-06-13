import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../utils/axios";

const API_URL = '/quiz'


export const createQuiz = createAsyncThunk("createQuiz/CreateQuiz", 
    async (quizData, thunkApi) => {
        try {
            const res = await api.post(`${API_URL}/create`, quizData)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
});

export const deleteQuiz = createAsyncThunk('quiz/deleteQuiz', 
    async (quizId, thunkApi) => {
        try {
            const res = await api.delete(`${API_URL}/${quizId}`)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const getSingleQuiz = createAsyncThunk('quiz/getSingleQuiz', 
    async (quizId, thunkApi) => {
        try {
            const res = await api.get(`${API_URL}/${quizId}`)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
) 

export const getSingleQuestion = createAsyncThunk('quiz/getSingleQuestion', 
    async (quizId, questionId, thunkApi) => {
        try {
            const res = await api.get(`${API_URL}/${quizId}/questions/${questionId}`)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
) 

export const editQuestion = createAsyncThunk('quiz/editQuestion', 
    async (quizId, questionId, thunkApi) => {
        try {
            const res = await api.get(`${API_URL}/${quizId}/questions/${questionId}`)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
) 