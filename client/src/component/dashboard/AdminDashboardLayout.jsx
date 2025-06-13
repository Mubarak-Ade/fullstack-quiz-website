import React from "react";
import { Outlet, Route, Routes } from "react-router";
import QuizPage from "../../pages/Quiz/QuizPage";
import SideBar from "./SideBar";
import BreadCrumbs from "../BreadCrumbs";

const AdminDashboardLayout = () => {
    return (
        <div className="flex w-full">
            <SideBar/>
            <main className="w-full bg-emerald-100">
                <BreadCrumbs />
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboardLayout;
