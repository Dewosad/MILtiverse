import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/missionbackground.svg";

import { cardData } from "../../constant/missionDetailCardData";
import { StoneData } from "../../constant/missionDetailSoneData";
import { useProgress } from "../../context/ProgressContext";

const Card = ({
  id,
  title,
  description,
  buttonTitle,
  position,
  link,
  unlocked,
  onStart,
}) => {
  return (
    <>
      <div
        className={`h-[123px] w-[193px] glass1-effect rounded-[12px] font-smoochsans text-white flex flex-col gap-[10px] absolute ${position}`}
      >
        <div>
          <h1 className="font-[700] text-[20px] text-border-pink leading-[24px]">
            {title}
          </h1>
          <p className=" text-[12px] leading-[100%] tracking-normal font-[600]">
            {description}
          </p>
        </div>

        <div>
          <button
            disabled={!unlocked}
            className="custom-button custom-button-rounded"
            onClick={() => onStart(id, link)}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </>
  );
};

const MissionDetail = () => {
  const navigate = useNavigate();
  const { completedCards, currentProgress } = useProgress();
  const handleStart = (id, link) => {
    if (completedCards.includes(id)) {
      // already finished → go to result
      navigate(`/mission/1/${link}`, { state: { cardId: id } });
    } else if (currentProgress[id]) {
      // resume from saved progress

      navigate(`/mission/1/${link}`, {
        state: { cardId: id },
      });
    } else {
      // new quiz → start from step 0

      navigate(`/mission/1/${link}`, { state: { cardId: id, step: 0 } });
    }
  };

  return (
    <div
      className="w-full h-screen  from-blue-900 to-black flex flex-col items-center pt-[97px] "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <div className="max-w-[840px] flex flex-col gap-[19px]">
        <h1 className="text-[80.7px] leading-[100%] text-white font-normal font-boldwishrough text-center">
          Mission 1
        </h1>
        <p className="mb-10 text-center max-w-[840px] font-[700] text-[86px] leading-[75px] text-[#A02570] font-smoochsans text-border-white ">
          Exploring The Galaxy Of Access To Information
        </p>
      </div>
      {cardData?.map((data, index) => {
        const unlocked =
          index === 0 || completedCards.includes(cardData[index - 1].id);
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            buttonTitle={data.buttonTitle}
            position={data.className}
            link={data.link}
            unlocked={unlocked}
            onStart={handleStart}
          />
        );
      })}
      {StoneData?.map((stone) => {
        return (
          <div
            key={stone.id}
            className={`absolute ${stone.position} ${stone.dimension}`}
          >
            <img src={stone.normal} alt="stone" />
          </div>
        );
      })}
    </div>
  );
};

export default MissionDetail;
