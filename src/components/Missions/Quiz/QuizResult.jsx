import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Background from "../../../assets/backgroundone.svg";
import leftArrow from "../../../assets/lefticon.svg";
import rightArrow from "../../../assets/righticon.svg";
import astronout from "../../../assets/astronautform.svg";
import { useProgress } from "../../../context/ProgressContext";

const QuizResult = ({ score }) => {
  const navigate = useNavigate();
  const { markCardComplete } = useProgress();
  const location = useLocation();
  const { cardId } = location.state || {};

  useEffect(() => {
    if (cardId) {
      markCardComplete(cardId);
    }
  }, [cardId, markCardComplete]);

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
        Your Score
      </h1>

      {/* result card */}
      <div className="glass1-effect rounded-[12px] min-h-[605px] w-[905px] flex flex-col justify-center">
        <div className="h-inherit flex flex-col items-center gap-[56px] mb-[22px]">
          <p className="text-center text-[80px] font-[400] font-boldwishclean max-w-[590px] flex flex-col items-center leading-[100%]">
            <span className="text-white">You Scored</span>
            <span className="text-[#FF00DD]">{score} Points</span>
          </p>
          <p className="max-w-[789px] text-[39px] font-[600] font-smoochsans leading-[100%]">
            we invite you and your organization to explore the mission with
            curiosity, focusing your energy on what you could do better.
          </p>
        </div>
      </div>

      <div className="flex gap-[29px] pt-[54px]">
        {/* <div
          className="custom-button flex items-center gap-[4px]"
          // onClick={onPrevious}
        >
          <img src={leftArrow} alt="left" className="size-[38px]" />
          <p className="text-[36.58px] font-[800] leading-[44px] flex items-center font-smoochsans">
            Previous
          </p>
        </div> */}
        <div
          className="custom-button flex flex-row-reverse items-center gap-[4px]"
          onClick={() => navigate("/mission/1")}
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

export default QuizResult;
