import React, { createContext, useState } from "react";

export const UserProfileContext = createContext({});
export const UserProfileProvider = ({ children }) => {
  const [profileInfo, setUserProfile] = useState({});


  return (
    <UserProfileContext.Provider
      value={{
        profileInfo,
        setUserProfile,


      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
