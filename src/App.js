import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormHome from "./pages/Form/FormHome";
import FormContainer from "./pages/Form/FormContainer";
import History from "./pages/Form/History";
import Guide from "./pages/Form/guide";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormHome} />
          <Route path="/form" component={FormContainer} />
          <Route path="/history" component={History} />
          <Route path="/guide" component={Guide} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
