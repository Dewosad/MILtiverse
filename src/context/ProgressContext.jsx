// src/context/ProgressContext.tsx
import React, { createContext, useCallback, useContext, useState } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [completedCards, setCompletedCards] = useState([]);
  const [currentProgress, setCurrentProgress] = useState({});
  const [cardAnswers, setCardAnswers] = useState({});

  const markCardComplete = useCallback((id) => {
    setCompletedCards((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setCurrentProgress((prev) => {
      const copy = { ...prev };
      console.log(copy, "before delete");
      console.log(copy);
      delete copy[id];
      console.log(copy, "after delete");
      return copy;
    });
  }, []);

  // Save quiz progress (step + answers)
  const saveProgress = (id, step, answers) => {
    setCurrentProgress((prev) => ({
      ...prev,
      [id]: { step, answers },
    }));
    setCardAnswers((prev) => ({
      ...prev,
      [id]: answers, // <--- store answers permanently
    }));
  };
  console.log(currentProgress, "current progress");
  console.log(completedCards, "completedCards");
  // Clear progress if user restarts
  const resetProgress = (id) => {
    setCurrentProgress((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
    setCardAnswers((prev) => {
      const copy = { ...prev };
      console.log(copy);
      delete copy[id];
      return copy;
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        completedCards,
        currentProgress,
        cardAnswers,
        markCardComplete,
        saveProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
};
