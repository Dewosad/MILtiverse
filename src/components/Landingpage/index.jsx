import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import firsthalf from "../../assets/half1.svg";
import secondhalf from "../../assets/half2.svg";
import SignupForm from "../../components/Forms/SignUp";
import SigninForm from "../../components/Forms/SignIn";
import { useNavigate } from "react-router-dom";
import Astronaut from "../../assets/astronautform.svg";
import buttonicon from "../../assets/buttonicon.svg";
import { button } from "framer-motion/client";

export default function RocketGame() {
  const [isSplit, setIsSplit] = useState(false);
  const [showStage, setShowStage] = useState(null);
  const [launch, setLaunch] = useState(false);

  const navigate = useNavigate();

  // 🚀 Rocket splits automatically after 2s, then shows info screen
  useEffect(() => {
    const splitTimer = setTimeout(() => {
      if (!isSplit && !launch) {
        setIsSplit(true);
        setTimeout(() => setShowStage("info"), 700);
      }
    }, 2000);

    return () => clearTimeout(splitTimer);
  }, [isSplit, launch]);

  // 🚀 Trigger rocket close + launch + navigate to planets page
  const handleLaunch = () => {
    setShowStage(null);
    setTimeout(() => {
      setIsSplit(false);
      setTimeout(() => {
        setLaunch(true);
        setTimeout(() => navigate("/mission"), 1200); // after launch animation
      }, 700);
    }, 600);
  };

  return (
    <div className="relative flex items-center justify-center max-h-screen overflofw-hidden">
      {/* Rocket wrapper */}
      <motion.div
        className="relative w-80 h-[1350px] flex mt-[300px]"
        initial={{ y: "100vh", opacity: 1 }}
        animate={
          launch
            ? { y: -1080, opacity: 0, scale: 0.8 }
            : { y: 0, opacity: 1, scale: 1 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* First half */}
        <motion.img
          src={firsthalf}
          className="absolute top-0 left-1/2 -translate-x-full"
          style={{ height: "1080px", width: "auto" }}
          initial={{ x: 0 }}
          animate={{ x: isSplit ? -335 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Second half */}
        <motion.img
          src={secondhalf}
          className="absolute top-0 left-1/2 -ml-[60px]"
          style={{ height: "1080px", width: "auto" }}
          initial={{ x: 0 }}
          animate={{ x: isSplit ? 395 : 0 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Forms / Info stage */}
      <AnimatePresence>
        {showStage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 backdrop-blur-xs rounded-2xl pf-6 shadow-2xl text-center mt-[-90px] w-180 glafss-effect pb-20"
          >
            {showStage === "info" && (
              <div class="flex flex-col justify-between gap-4 items-center h-[500px] pt-[10px] pl-[50px]">
                <h2 class="text-[50px] text-start font-[900] leading-[111%] text-gradient">
                  <span class="text-stroke">Ready</span>{" "}
                  <span class="text-stroke">to</span>{" "}
                  <span class="text-stroke">power</span>{" "}
                  <span class="text-stroke">up</span>{" "}
                  <span class="text-stroke">your</span>{" "}
                  <span class="text-stroke">Media</span>{" "}
                  <span class="text-stroke">&</span>{" "}
                  <span class="text-stroke">Information</span>{" "}
                  <span class="text-stroke">Literacy</span> <br/>{" "}
                  <span class="text-stroke">(MIL)</span>{" "}
                  <span class="text-stroke">skills?</span>
                </h2>
                <div class="flex gap-3">
                  <div className="flex flex-col gap-3 justify-end pb-[60px]">
                    <button
                      class="px-4 py-2 bg-purple-600 text-white text-[28px] leading-[100%] font-[800] rounded-[13.71px] flex gap-2 items-center cursor-pointer"
                      onClick={() => setShowStage("signup")}
                    >
                        <img src={buttonicon} className="h-[44px] w-[44px]" />
                      Get my spaceship
                    </button>
                    <button
                      class="text-white underline"
                      onClick={() => setShowStage("signin")}
                    >
                      I already have my spaceship!
                    </button>
                  </div>
                  <div className="w-[354px] h-[400px] mt-[-170px]">
                    <img src={Astronaut} className="h-full w-full" />
                  </div>
                </div>
              </div>
            )}
            {showStage === "signup" && <SignupForm onSubmit={handleLaunch} />}
            {showStage === "signin" && <SigninForm onSubmit={handleLaunch} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
