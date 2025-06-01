/* -------------------------------------------------------------------------- */
/*                    This handle all the routes in the app                   */
/* -------------------------------------------------------------------------- */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import QuizPage from "../pages/QuizPage";
import Result from "../pages/Result";
import Dashboard from "../pages/Dashboard";
import Loading from "../utils/Animation/loading";
import PrivateRoute from "./PrivateRoute";
import QuizList from "../pages/QuizList";
import Quizzes from "../pages/Quizzes";
import QuizRoutes from "./QuizRoutes";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    {/* Home Page Route */}
                    <Route path="/login" element={<Login />} />
                    {/* Login Page Route */}
                    <Route path="/register" element={<Register />} />
                    {/* Reggister Page Route */}
                    <Route path="/quiz" element={<QuizPage/>} />
                    <Route
                        element={
                            <PrivateRoute>
                                <QuizRoutes />
                            </PrivateRoute>
                        }
                    >
                        <Route path="/:id" element={<QuizList/>} />
                    </Route>
                    <Route
                        path="/result/:id"
                        element={
                            <PrivateRoute>
                                <Result />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
