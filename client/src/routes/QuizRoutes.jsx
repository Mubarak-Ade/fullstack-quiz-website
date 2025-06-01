import React from "react";
import { Outlet } from "react-router";

const QuizLayout = () => {
    return (
		<div className="">
			<Outlet />
		</div>
	);
};

export default QuizLayout;
