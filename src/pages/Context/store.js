import React from "react";
import FormMain from "../Form/FormMain";

export const StoreContext = React.createContext({});
export const StepContext = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [userData, setUserData] = React.useState([]);
  const [finalData, setFinalData] = React.useState([]);
  function submitData() {
    setActiveStep(activeStep + 1);
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
  }
  return (
    <StoreContext.Provider
      value={{
        activeStep,
        setActiveStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <FormMain />
    </StoreContext.Provider>
  );
};
