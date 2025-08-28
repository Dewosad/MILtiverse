import React from "react";

const QuizQuestion = ({ question, onAnswer, step, total }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <h2 className="text-2xl font-bold mb-6">
        Question {step} / {total}
      </h2>
      <p className="text-lg mb-6 text-center">{question.question}</p>
      <div className="flex flex-col gap-3 w-full max-w-md">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(opt)}
            className="bg-[#2a2a72] hover:bg-[#4444aa] px-4 py-2 rounded-lg"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
