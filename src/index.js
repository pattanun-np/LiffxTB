import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AppContainer } from "react-hot-loader";
import ContextProvider from "./pages/Context/providerComposer";

ReactDOM.render(
  <AppContainer>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AppContainer>,

  document.getElementById("root")
);

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <AppContainer>
        <ContextProvider>
          <NextApp />
        </ContextProvider>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
