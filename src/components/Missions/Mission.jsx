import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import missionone from "../../assets/mission1.svg";
import rightarrow from "../../assets/righticon.svg";
import leftarrow from "../../assets/lefticon.svg";

const Mission = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative w-full h-screen bg-gradient-to-b from-blue-900 to-black bg-cover bg-center flex flex-col items-center justify-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight uppercase tracking-wider">
        Journey Through <br /> The MILTiverse
      </h1>

      {/* Planet + Navigation */}
      <div className="relative flex items-center justify-center w-full mt-10">
        <button className="absolute left-10">
          <img src={leftarrow} alt="Left" className="w-12 h-12" />
        </button>

        {/* 👇 navigate to mission detail on click */}
        <img
          src={missionone}
          alt="Mission Planet"
          className="w-[280px] md:w-[350px] cursor-pointer"
          onClick={() => navigate("/mission/1")}
        />

        <button className="absolute right-10">
          <img src={rightarrow} alt="Right" className="w-12 h-12" />
        </button>
      </div>

      {/* Mission Info */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#C626FF] uppercase">Mission 1</h2>
        <p className="text-lg md:text-xl mt-2">
          Exploring the galaxy of <br /> access to information
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-10 w-full flex items-center justify-center gap-6">
        <button className="bg-[#0a2c5e] px-4 py-2 rounded-md text-sm">MIL Superchargers</button>
        <button className="bg-[#0a2c5e] px-4 py-2 rounded-md text-sm">MIL Compass</button>
        <button className="bg-[#0a2c5e] px-4 py-2 rounded-md text-sm">
          Organizational Policy Draft
        </button>
      </div>

      {/* Top-right Spaceship */}
      <div className="absolute top-6 right-6">
        <button className="bg-[#311a74] px-4 py-2 rounded-full text-sm">My Spaceship</button>
      </div>
    </motion.div>
  );
};

export default Mission;
