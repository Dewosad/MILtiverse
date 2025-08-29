import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/missionbackground.svg";

import blueStone from "../../assets/blueStone.svg";
import blueStoneGlow from "../../assets/blueStoneGlow.svg";
import greenStone from "../../assets/greenStone.svg";
import greenStoneGlow from "../../assets/greenStoneGlow.svg";
import pinkStone from "../../assets/pinkStone.svg";
import pinkStoneGlow from "../../assets/pinkStoneGlow.svg";
import yellowStone from "../../assets/yellowstone.svg";
import yellowStoneGlow from "../../assets/yellowStoneGlow.svg";
import purpleStone from "../../assets/purpleStone.svg";
import purpleStoneGlow from "../../assets/purpleStoneGlow.svg";

const StoneData = [
  {
    id: 1,
    normal: blueStone,
    glow: blueStoneGlow,
    dimension: "h-[234px] w-[255px]",
    glowDimension: "h-[274px] w-[285px]",
    position: "bottom-[-17.57px] left-[712px]",
  },
  {
    id: 2,
    normal: greenStone,
    glow: greenStoneGlow,
    dimension: "h-[88px] w-[108px]",
    glowDimension: "h-[108px] w-[128px]",
    position: "bottom-[278px] left-[565px]",
  },
  {
    id: 3,
    normal: pinkStone,
    glow: pinkStoneGlow,
    dimension: "h-[184px] w-[117px]",
    glowDimension: "h-[204px] w-[137px]",
    position: "bottom-[114.58px] right-[250px]",
  },
  {
    id: 4,
    normal: yellowStone,
    glow: yellowStoneGlow,
    dimension: "h-[134px] w-[242px]",
    glowDimension: "h-[154px] w-[262px]",
    position: "bottom-[74.8px] left-[300px]",
  },
  {
    id: 5,
    normal: purpleStone,
    glow: purpleStoneGlow,
    dimension: "h-[144px] w-[178px]",
    glowDimension: "h-[164px] w-[198px]",
    position: "bottom-[170.98px] left-[415px]",
  },
];
const cardData = [
  {
    id: 1,
    title: "Take a look inside",
    description:
      "These concepts will provide clarity and will guide us in understanding the relevance of these topics in this digital era.",
    buttonTitle: "Take Look",
    // className: "bottom-[370px] left-[300px]",
    className: "bottom-[36.13%] left-[20.83%]",
    link: "take-look",
  },
  {
    id: 2,
    title: "Key Concept",
    description:
      "These concepts will provide clarity and will guide us in understanding the relevance of these topics in this digital era.",
    buttonTitle: "Learn Key Concept",
    // className: "bottom-[424px] left-[642px]",
    className: "bottom-[41.41%] left-[44.58%]",
    link: "key-concept",
  },
  {
    id: 3,
    title: "Inspiring Notes",
    description:
      "These concepts will provide clarity and will guide us in understanding the relevance of these topics in this digital era.",
    buttonTitle: "Read Inspiring Notes",
    // className: "bottom-[277px] right-[337px]",
    className: "bottom-[27.05%] right-[23.40%]",
    link: "inspiring-notes",
  },
  {
    id: 4,
    title: "Want to go deeper",
    description:
      "These concepts will provide clarity and will guide us in understanding the relevance of these topics in this digital era.",
    buttonTitle: "Lets go !",
    // className: "bottom-[349px] right-[92px]",
    className: "bottom-[34.08%] right-[6.39%]",
    link: "deep-study",
  },

  {
    id: 5,
    title: "Lets Jump in",
    description:
      "These concepts will provide clarity and will guide us in understanding the relevance of these topics in this digital era.",
    buttonTitle: "Jump In",
    // className: "bottom-[162px] left-[624px]",
    className: "bottom-[15.82%] left-[43.33%]",
    link: "jump-in",
  },
];

const Card = ({ title, description, buttonTitle, position, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`h-[123px] w-[193px] glass1-effect font-smoochsans text-white flex flex-col gap-[10px] absolute ${position}`}
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
            className="custom-button custom-button-rounded"
            onClick={() =>
              navigate(`/mission/1/${link}`, { state: { category: link } })
            }
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </>
  );
};

const MissionDetail = () => {
  // const navigate = useNavigate();

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
      {cardData?.map((data) => {
        return (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
            buttonTitle={data.buttonTitle}
            position={data.className}
            link={data.link}
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
