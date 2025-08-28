import React, { useState } from "react";
import { quizData } from "../../../constant/quizData";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === quizData[currentStep].answer) {
      setScore(score + 1);
    }

    if (currentStep + 1 < quizData.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return <QuizResult score={score} total={quizData.length} />;
  }

  return (
    <QuizQuestion
      question={quizData[currentStep]}
      onAnswer={handleAnswer}
      step={currentStep + 1}
      total={quizData.length}
    />
  );
};

export default Quiz;
