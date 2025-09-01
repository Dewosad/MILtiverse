import React, { useState } from "react";
import { quizData } from "../../../constant/quizData";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { useLocation } from "react-router-dom";
import { useProgress } from "../../../context/ProgressContext";

const Quiz = () => {
  const {
    saveProgress,
    completedCards,
    currentProgress,
    cardAnswers,
    markCardComplete,
  } = useProgress();
  const location = useLocation();
  const { cardId } = location.state || {};

  const savedAnswers = cardAnswers[cardId] || Array(quizData.length).fill(null);

  // restore saved step if exists, else 0
  const savedStep = currentProgress[cardId]?.step || 0;

  const [answers, setAnswers] = useState(savedAnswers);
  const [currentStep, setCurrentStep] = useState(savedStep);
  const [finished, setFinished] = useState(completedCards.includes(cardId));

  // if already completed, show result immediately
  if (completedCards.includes(cardId)) {
    const score = savedAnswers.filter(
      (ans, idx) => ans === quizData[idx].answer
    ).length;
    return <QuizResult score={score} total={quizData.length} cardId={cardId} />;
  }

  const handleAnswer = (selected) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = selected;
    setAnswers(newAnswers);
    saveProgress(cardId, currentStep, newAnswers);
  };
  const handleNext = () => {
    if (currentStep + 1 < quizData.length) {
      setCurrentStep(currentStep + 1);
      saveProgress(cardId, currentStep + 1, answers);
    } else {
      markCardComplete(cardId);
      setFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      saveProgress(cardId, currentStep - 1, answers);
    }
  };

  if (finished) {
    // compute score from answers
    const score = answers.filter(
      (ans, idx) => ans === quizData[idx].answer
    ).length;

    return <QuizResult score={score} total={quizData.length} />;
  }

  return (
    <QuizQuestion
      question={quizData[currentStep]}
      onAnswer={handleAnswer}
      step={currentStep + 1}
      total={quizData.length}
      onNext={handleNext}
      onPrevious={handlePrevious}
      selectedAnswer={answers[currentStep]}
    />
  );
};

export default Quiz;
