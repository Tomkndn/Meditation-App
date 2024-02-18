import React, { createContext, useState, useContext, useCallback } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [isPlaying, setPlaying] = useState(false);
    const [timer,ResetTimer] = useState(false)

    const updatePlaying = () => {
      setPlaying((prevIsPlaying) => !prevIsPlaying);
    };
    
    const updateTimer = ()=>{
        setPlaying((prevIsPlaying) => !prevIsPlaying);
        ResetTimer(!timer)
    }

  return (
    <MyContext.Provider
      value={{ isPlaying, updatePlaying, timer, updateTimer }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };
