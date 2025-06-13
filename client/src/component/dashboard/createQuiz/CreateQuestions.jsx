import React from "react";

const CreateQuestions = ({
    question,
    options,
    answer,
    index,
    handleAnswersChange,
    handleQuestionsChange,
    handleOptionsChange,
}) => {
    return (
        <div>
            <label className="p-2 flex flex-col font-poppins">
                Question {index + 1}
            </label>
            <input
                value={question}
                type="text"
                className="bg-white px-4 py-2 rounded-xl border border-slate-400"
                onChange={(e) => handleQuestionsChange(index, e.target.value)}
                placeholder="Enter question text"
            />
            <ul className="p-2 flex flex-col gap-2">
                {["A", "B", "C", "D"].map((opt) => (
                    <label className="flex gap-2 items-center" key={opt}>
                        <input
                            type="text"
                            value={options[opt]}
                            onChange={(e) =>
                                handleOptionsChange(index, opt, e.target.value)
                            }
                            name=""
                            className="bg-white px-4 py-2 rounded-xl border border-slate-400"
                            placeholder={opt}
                        />
                    </label>
                ))}
            </ul>
             <label className="p-2 flex flex-col font-poppins">
                Correct Answer
            </label>
            <input
                value={answer}
                type="text"
                className="bg-white px-4 py-2 rounded-xl border border-slate-400"
                onChange={(e) => handleAnswersChange(index, e.target.value)}
                placeholder="Enter question text"
            />
        </div>
    );
};

export default CreateQuestions;
