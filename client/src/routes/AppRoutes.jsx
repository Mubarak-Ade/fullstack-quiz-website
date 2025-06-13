/* -------------------------------------------------------------------------- */
/*                    This handle all the routes in the app                   */
/* -------------------------------------------------------------------------- */

import { Route, Routes } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import QuizPage from "../pages/Quiz/QuizPage";
import Result from "../pages/Quiz/Result";
import Dashboard from "../pages/Dashboard/Admin/AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import QuizList from "../pages/Quiz/QuizList";
import QuizTaking from "../pages/Quiz/QuizTaking";
import CreateQuiz from "../component/dashboard/createQuiz/CreateQuiz";
import DashboardLayout from "../component/dashboard/UserDashboardLayout";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import UsersPage from "../pages/Dashboard/Admin/UsersPage";
import ResultPage from "../pages/Dashboard/Admin/ResultPage";
import SettingPage from "../pages/Dashboard/Admin/SettingPage";
import AdminRoute from "./AdminRoute";
import UserDashboardLayout from "../component/dashboard/UserDashboardLayout";
import AdminDashboardLayout from "../component/dashboard/AdminDashboardLayout";
import UserDashboard from "../pages/Dashboard/User/UserDashboard";

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
                    <Route path="/quizzes" element={<QuizPage />} />
                    <Route path="/quiz/:id" element={<QuizList />} />
                    <Route path="/quiz/:id/start" element={<QuizTaking />} />
                    <Route path="/quiz/:id/result" element={<Result />} />

                    {/* DASHBOARD ROUTE */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/user" element={<UserDashboardLayout />}>
                            <Route path="quizzes" element={<CreateQuiz />} />
                            <Route
                                path="dashboard"
                                element={<UserDashboard />}
                            />
                            <Route path="users" element={<UsersPage />} />
                            <Route path="results" element={<ResultPage />} />
                            <Route path="settings" element={<SettingPage />} />
                        </Route>
                    </Route>

                    <Route element={<PrivateRoute><AdminRoute /></PrivateRoute>}>
                        <Route path="/admin" element={<AdminDashboardLayout />}>
                            <Route
                                path="dashboard"
                                element={<AdminDashboard />}
                            />
                            <Route path="quizzes" element={<CreateQuiz />} />
                            <Route path="users" element={<UsersPage />} />
                            <Route path="results" element={<ResultPage />} />
                            <Route path="settings" element={<SettingPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
