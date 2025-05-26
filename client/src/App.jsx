import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router";

function App() {
	return (
		<div className="h-screen bg bg-white">
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
		</div>
	);
}
export default App;
