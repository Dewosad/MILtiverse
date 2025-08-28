import React from "react";
import { useNavigate } from "react-router-dom";

const QuizResult = ({ score, total }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h1>
      <p className="text-xl mb-6">
        You got <span className="text-[#ff00ff]">{score}</span> out of {total} correct.
      </p>
      <button
        onClick={() => navigate("/mission")}
        className="bg-[#2a2a72] hover:bg-[#4444aa] px-6 py-2 rounded-lg"
      >
        Next Adventure
      </button>
    </div>
  );
};

export default QuizResult;
