import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import CreateQuestions from "./CreateQuestions";
import { useDispatch, useSelector } from 'react-redux'
import { createQuiz } from "../../../features/quiz/quizThunk";
const CreateQuiz = () => {
    const questionData = [
        {
            question: "",
            options: {
                A: "",
                B: "",
                C: "",
                D: "",
            },
            correctAnswer: ""
        },
    ];

    const {quiz, loading, error} = useSelector((state) => state.createQuiz)

    const dispatch = useDispatch()    

    const categories = ["Select Category", "Math", "English"];

    const [title, handleTitleChange, resetTitle] = useInput("");
    const [timeLimit, handleTimeLimitChange, resetTimeLimit] = useInput(0);
    const [createdBy, handleCreatedByChange, resetCreatedBy] = useInput("");
    // const category = useInput(categories)
    const [category, handleCategoryChange, resetCategory] =
        useInput("Select Category");
    const [description, handleDescriptionChange, resetDescription] =
        useInput("");

    const [questions, setQuestions] = useState(questionData);

    const quizData = { title, category, description, questions, timeLimit };

    const handleQuestionsChange = (index, value) => {
        const update = [...questions];
        update[index].question = value;
        setQuestions(update);
    };

    const handleAnswersChange = (index, value) => {
        const update = [...questions];
        update[index].correctAnswer = value;
        setQuestions(update);
    };

    const handleOptionsChange = (index, optionKey, value) => {
        const update = [...questions];
        update[index].options[optionKey] = value;
        setQuestions(update);
    };

    const handleSubmit = (e) => {
        dispatch(createQuiz({title, category, timeLimit, questions}))
        e.preventDefault();
        console.log(quiz);
        console.log("clicked");
    };

    const handleCreateQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: "",
                options: {
                    A: "",
                    B: "",
                    C: "",
                    D: "",
                },
            },
        ]);
    };

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold m-4 font-montserrat">
                Create a Quiz
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col m-4 shadow-[0px_1px_15px_0px] shadow-slate-200 py-2.5 px-5 max-w-150 bg-white rounded-2xl "
            >
                <label className="p-2 flex flex-col font-poppins">
                    Title
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        type="text"
                        className=" bg-white px-4 py-2 rounded-xl border border-slate-400"
                        placeholder="Enter a quiz title"
                    />
                </label>
                <label className="p-2 flex flex-col font-poppins">
                    Category
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        name="category"
                        className="bg-white px-4 py-3 rounded-xl border border-slate-400"
                        id=""
                    >
                        {categories.map((cat, index) => (
                            <option
                                value={cat}
                                className="font-poppins"
                                key={index}
                            >
                                {cat}
                            </option>
                        ))}
                    </select>
                </label>
				<label className="p-2 flex flex-col font-poppins">
                    TimeLimit
                    <input
                        value={timeLimit}
                        onChange={handleTimeLimitChange}
                        type="number"
                        className=" bg-white px-4 py-2 rounded-xl border border-slate-400"
                        placeholder="Enter a quiz time limit"
                    />
                </label>
				<label className="p-2 flex flex-col font-poppins">
                    createdBy
                    <input
                        value={createdBy}
                        onChange={handleCreatedByChange}
                        type="text"
                        className=" bg-white px-4 py-2 rounded-xl border border-slate-400"
                        placeholder="created by"
                    />
                </label>
                <label className="p-2 flex flex-col font-poppins">
                    Description
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Enter quiz description"
                        className="bg-white px-4 py-2 rounded-xl border border-slate-400"
                        name=""
                    ></textarea>
                </label>
                <div className="">
                    {questions.map((q, i) => (
                        <CreateQuestions
                            question={q.question}
                            options={q.options}
                            answers={q.correctAnswer}
                            key={i}
                            index={i}
                            handleQuestionsChange={handleQuestionsChange}
                            handleAnswersChange={handleAnswersChange}
                            handleOptionsChange={handleOptionsChange}
                        />
                    ))}
                    <button
                        className="bg-teal-700 rounded-xl w-40 h-10 text-white font-poppins"
                        type="button"
                        onClick={handleCreateQuestion}
                    >
                        Add Question
                    </button>
                </div>
                <button
                    className="bg-teal-700 w-50 h-10 text-white rounded-xl self-center m-2 font-poppins cursor-pointer"
                    type="submit"
                >
                    Create Quiz
                </button>
            </form>
        </div>
    );
};

export default CreateQuiz;
