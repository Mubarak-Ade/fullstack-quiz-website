import React, { useState } from "react";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const questionData = {
        question: '',
        options: {
            A: '',
            B: '',
            C: '',
            D: ''
        }
    }

    const [category, setCategory] = useState(["Select Category", "Math", "English"])
    const [questions, setQuestions] = useState(questionData);

    return (
        <div className="h-full p-4">
            <h1 className="p-4 text-4xl text-center font-alata">
                Welcome to your dashboard {user.username}
            </h1>
            <div className="p-4 flex flex-col">
                <h2 className="text-3xl font-bold m-4 font-montserrat">Create a Quiz</h2>
                <form className="flex flex-col m-4 shadow-[0px_1px_15px_0px] shadow-slate-200 py-2.5 px-5 max-w-150 bg-white rounded-2xl ">
                    <label className="p-2 flex flex-col font-poppins">
                        Title
                        <input type="text" className=" bg-white px-4 py-2 rounded-xl border border-slate-400" placeholder="Enter a quiz title" />
                    </label>
                    <label className="p-2 flex flex-col font-poppins">
                        Category
                        <select name="category" className="bg-white px-4 py-3 rounded-xl border border-slate-400" id="">
                            {category.map((cat, index) => (
                                <option value="" className="font-poppins" key={index}>{cat}</option>
                            ))}
                        </select>
                    </label>
                    <label className="p-2 flex flex-col font-poppins">
                        Description
                        <textarea placeholder="Enter quiz description" className="bg-white px-4 py-2 rounded-xl border border-slate-400" name=""></textarea>
                    </label>
                    <label className="p-2 flex flex-col font-poppins">
                        Question 1
                        <input type="text" className="bg-white px-4 py-2 rounded-xl border border-slate-400" placeholder="Enter question text" />
                        <ul className="p-2 flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <input type="radio" name="" />
                                Option 1
                            </li>
                            <li className="flex gap-2 items-center">
                                <input type="radio" name="" />
                                Option 2
                            </li>
                            <li className="flex gap-2 items-center">
                                <input type="radio" name="" />
                                Option 3
                            </li>
                            <li className="flex gap-2 items-center">
                                <input type="radio" name="" />
                                Option 4
                            </li>
                        </ul>
						<button className="bg-teal-700 rounded-xl w-40 h-10 text-white font-poppins">Add Question</button>
                    </label>
                </form>
				<button className="bg-teal-700 w-50 h-10 text-white rounded-xl self-center m-2 font-poppins">Create Quiz</button>
            </div>
        </div>
    );
};

export default Dashboard;
