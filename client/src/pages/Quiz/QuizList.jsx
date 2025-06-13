import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getAllQuiz, getQuizById } from "../../features/auth/reduxThunk";
import Loading from "../../utils/Animation/loading";
import { memo } from "react";
import QuizCard from "../../component/QuizCard";
import { motion } from "framer-motion";

const QuizList = memo(() => {
    const { currentQuiz, error, loading } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();

    const [answers, setAnswers] = useState({});

    const { category, questions, title, timelimit } = currentQuiz || {};

    const { id } = useParams();

    const handleChecked = (index, key) => {
        setAnswers((prev) => ({
            ...prev,
            [index]: key,
        }));
    };

    useEffect(() => {
        dispatch(getQuizById(id));
    }, [dispatch, id]);

    return (
        <div className="h-full p-4">
            {loading && <Loading />}
            <div className="flex flex-col px-8 justify-center">
                <h1 className="text-5xl font-sourgummy font-bold">
                    {category}
                </h1>
                <h2 className="text-xl font-poppins ">{title}</h2>
                <QuizCard
                    id={id}
                    category={category}
                    questions={questions}
                    title={title}
                />
            </div>
            <div className="p-4">
                <h2 className="text-2xl m-4 text-center font-ubuntu">
                    Questions
                </h2>
                <div className="grid px-4 py-8">
                    {questions?.map((quest, index) => (
                        <ol
                            className=" m-2 p-4 rounded-xl shadow-[0px_1px_10px_0px] shadow-teal-700/20 max-w-200"
                            key={quest._id}
                        >
                            <li className="flex gap-6 font-bold">
                                <span>{index + 1}</span> {quest.question}
                            </li>
                            <ul className="">
                                {Object.entries(quest.options).map(
                                    ([key, value]) => (
                                        <motion.label
                                            whileHover={{
                                                color:
                                                    "var(--color-teal-700)",
                                            }}
                                            whileTap={{
                                                scale: 0.9,
                                            }}
                                            className="peer-checked:border-teal-700 border-2 border-transparent peer-checked:bg-teal-500 flex gap-4 px-4 py-3 rounded-2xl cursor-pointer items-center"
                                        >
                                            <input
                                                className="peer hidden"
                                                type="radio"
                                                name={`question-${index}`}
                                                id=""
                                                value={key}
                                                checked={answers[index] === key}
                                                onChange={() =>
                                                    handleChecked(index, key)
                                                }
                                            />
                                            <span className="w-5 h-5 border-2 border-teal-800 rounded peer-checked:bg-teal-800 relative">
                                                <svg className="absolute inset-0 w-full h-full text-white hidden peer-checked:block"  viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" >
                                                    <path d="M20 6L9 17l-5-5" fill="none" />
                                                </svg>
                                            </span>
                                            <span>{value}</span>
                                        </motion.label>
                                    )
                                )}
                            </ul>
                        </ol>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default QuizList;
