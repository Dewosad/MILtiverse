import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../../../assets/backgroundone.svg";
import leftArrow from "../../../assets/lefticon.svg";
import rightArrow from "../../../assets/righticon.svg";
import astronout from "../../../assets/astronautform.svg";

const QuizQuestion = ({ question, onAnswer, step, total }) => {
  const Location = useLocation();
  console.log(Location.state.category);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen from-blue-900 to-black text-white p-6"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <div className="absolute top-[35px] left-[39px] flex ">
        <img src={leftArrow} alt="arrow" className="size-[85px]" />
        <h1 className="flex items-center text-[32px] gap-[19px]">
          <span className="font-boldwishrough font-[400]">Mission 1</span>
          <span className="font-smoochsans text-border-pink font-[700]">
            Exploring The Galaxy Of Access To Information
          </span>
        </h1>
      </div>
      <div className="absolute top-[55px] right-[44px] flex justify-between glass1-effect glass1-effect-rounded rounded-[32px] h-fit">
        <img
          src={astronout}
          alt="astronaut"
          className="size-[34px] object-cover object-top rounded-[50%] scale-x-[-1]"
        />
        <p className="font-boldwishrough text-[25px] font-[400] flex justify-between">
          My Spaceship
        </p>
      </div>
      <h1 className="text-border-pink font-smoochsans text-[68px] font-[700] leading-[82px] mb-[31px] mt-[136px]">
        Key Concept
      </h1>

      {/* question card */}
      <div className="glass1-effect h-[605px] w-[905px]">
        {/* Progress Bar */}
        <div className="flex flex-wrap gap-1 justify-center mb-6 ">
          {Array.from({ length: total }).map((_, idx) => (
            <div
              key={idx}
              className={`h-[12px]  rounded-[16px]  grow ${
                idx < step - 1 ? "progress-fill" : "bg-gray-500 bg-opacity-30"
              }`}
            />
          ))}
        </div>
        <p className="text-lg mb-6 text-center font-smoochsans text-[28px]">
          <span className="font-[900]">Access to information:</span>{" "}
          <span className="font-[600]">{question.question}</span>
        </p>
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

      <div className="flex gap-[29px] pt-[54px]">
        <div className="custom-button flex items-center gap-[4px]">
          <img src={leftArrow} alt="left" className="size-[38px]" />
          <p className="text-[36.58px] font-[800] leading-[44px] flex items-center font-smoochsans">
            Previous
          </p>
        </div>
        <div className="custom-button flex flex-row-reverse items-center gap-[4px]">
          <img src={rightArrow} alt="right" className="size-[38px]" />
          <p className="text-[36.58px] font-[800] leading-[44px] flex items-center font-smoochsans">
            Next
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
