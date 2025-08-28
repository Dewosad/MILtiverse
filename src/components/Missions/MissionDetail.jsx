import React from "react";
import { useNavigate } from "react-router-dom";

const MissionDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-900 to-black flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6">Mission 1: Access to Information</h1>
      <p className="mb-10 text-center max-w-xl">
        In this mission, you’ll learn about the importance of access to information and its role in
        building an informed society.
      </p>

      <div className="flex flex-col gap-4">
        <button className="bg-blue-600 px-6 py-2 rounded-md">Take a Look Inside</button>
        <button className="bg-green-600 px-6 py-2 rounded-md">Key Concept</button>
        <button
          onClick={() => navigate("/quiz")}
          className="bg-purple-600 px-6 py-2 rounded-md"
        >
          Let’s Jump In 🚀
        </button>
      </div>
    </div>
  );
};

export default MissionDetail;
