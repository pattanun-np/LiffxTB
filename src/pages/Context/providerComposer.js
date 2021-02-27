import React, { cloneElement } from "react";

import { UserProfileProvider } from "./userDataProvider";
import { UserDashboardProvider} from "./userDashboardProvider"
import { StoreContextProvider } from "./store";

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}
export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[<UserProfileProvider />, <StoreContextProvider />,< UserDashboardProvider/>]}
    >
      {children}
    </ProviderComposer>
  );
}
