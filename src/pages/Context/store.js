import React from "react";

export const StoreContext = React.createContext({});

export const StoreContextProvider = ({ children }) => {
  const [gender, setGender] = React.useState("ระบุเพศ");
  const [age, setAge] = React.useState("");

  const store = {
    gender: [gender, setGender],
    age: [age, setAge],
  };
  console.log(store);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
