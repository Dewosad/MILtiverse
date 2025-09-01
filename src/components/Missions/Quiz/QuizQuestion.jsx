import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../../assets/backgroundone.svg";
import leftArrow from "../../../assets/lefticon.svg";
import rightArrow from "../../../assets/righticon.svg";
import astronout from "../../../assets/astronautform.svg";

const QuizQuestion = ({
  question,
  onAnswer,
  step,
  total,
  onNext,
  onPrevious,
  selectedAnswer,
}) => {
  const navigate = useNavigate();
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
        <img
          src={leftArrow}
          alt="arrow"
          className="size-[85px]"
          onClick={() => navigate("/mission/1")}
        />
        <h1 className="flex items-center text-[32px] gap-[19px]">
          <span className="font-boldwishrough font-[400]">Mission 1</span>
          <span className="font-smoochsans text-border-pink font-[700]">
            Exploring The Galaxy Of Access To Information
          </span>
        </h1>
      </div>
      <div className="absolute top-[55px] right-[44px] flex justify-between glass1-effect rounded-[32px] py-[6px] px-[12px] h-fit">
        <img
          src={astronout}
          alt="astronaut"
          className="size-[34px] object-cover object-top rounded-[50%] scale-x-[-1] bg-black"
        />
        <p className="font-boldwishrough text-[25px] font-[400] flex justify-between">
          My Spaceship
        </p>
      </div>
      <h1 className="text-border-pink font-smoochsans text-[68px] font-[700] leading-[82px] mb-[31px] mt-[136px]">
        Key Concept
      </h1>

      {/* question card */}
      <div className="glass1-effect rounded-[12px] min-h-[605px] w-[905px] flex flex-col">
        {/* Progress Bar */}
        <div className="flex flex-wrap gap-1 justify-center mb-[56px] ">
          {Array.from({ length: total }).map((_, idx) => (
            <div
              key={idx}
              className={`h-[12px]  rounded-[16px]  grow ${
                idx < step ? "progress-fill" : "bg-gray-500 bg-opacity-30"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-[56px]">
          <p className="text-lg mb-6 text-center font-smoochsans text-[28px] max-w-[590px]">
            <span className="font-[900]">Access to information:</span>{" "}
            <span className="font-[600]">{question.question}</span>
          </p>
          <div className="grid grid-cols-2 gap-x-[64px] gap-y-[24px] gap-3 max-w-[500px]">
            {question.options.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => onAnswer(opt)}
                className="flex gap-[18px] items-center "
              >
                <div
                  className={`size-[42px] rounded-[50%] cursor-pointer flex-shrink-0 ${
                    selectedAnswer === opt ? "bg-pink-500 " : "glass1-effect"
                  }`}
                ></div>
                <p className="font-smoochsans font-[400] text-[32px] leading-[38px]">
                  {opt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-[29px] pt-[54px]">
        <div
          className="custom-button flex items-center gap-[4px]"
          onClick={onPrevious}
        >
          <img src={leftArrow} alt="left" className="size-[38px]" />
          <p className="text-[36.58px] font-[800] leading-[44px] flex items-center font-smoochsans">
            Previous
          </p>
        </div>
        <div
          className="custom-button flex flex-row-reverse items-center gap-[4px]"
          onClick={onNext}
        >
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
