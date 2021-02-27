
import React, { createContext, useState } from "react";

export const UserDasboardContext = createContext({});
export const UserDashboardProvider = ({ children }) => {
const [userDashboard, setUserDashboard] = useState("");

  return (
    <UserDasboardContext.Provider
      value={{
        userDashboard,
        setUserDashboard
    
      }}
    >
      {children}
    </UserDasboardContext.Provider>
  );
};
