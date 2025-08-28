// context/GameContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [user, setUser] = useState(null);         // { name, email }
  const [missions, setMissions] = useState([]);   // [ {id:1, completed:true}, ... ]
  const [badges, setBadges] = useState([]);       // [true,false,...]

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gameState"));
    if (saved) {
      setUser(saved.user);
      setMissions(saved.missions);
      setBadges(saved.badges);
    }
  }, []);

  // Save on every change
  useEffect(() => {
    localStorage.setItem(
      "gameState",
      JSON.stringify({ user, missions, badges })
    );
  }, [user, missions, badges]);

  const completeMission = (id) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: true } : m))
    );
    setBadges((prev) => prev.map((b, i) => (i === id ? true : b)));
  };

  return (
    <GameContext.Provider
      value={{ user, setUser, missions, setMissions, badges, completeMission }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
