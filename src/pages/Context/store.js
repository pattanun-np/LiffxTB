import React, { useState, createContext } from "react";

export const StoreContext = createContext({});
export const StoreContextProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState({
    UserInfo: "",
    Score: "",
    UserAnswer: "",
    IsRisk: "",
    RefCode: "",
    QrLink: "",
  });

  return (
    <StoreContext.Provider
      value={{
        activeStep,
        setActiveStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
