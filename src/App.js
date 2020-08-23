import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormHome from "./pages/Form/FormHome";
import FormMain from "./pages/Form/FormMain";
import History from "./pages/Form/History";
import Login from "./pages/Form/Login";
import Guide from "./pages/Form/guide";
import { StepContext } from "./pages/Context/store";
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormHome} />
          <Route path="/login" component={Login} />
          <Route path="/guide" component={Guide} />
          <Route path="/dashboard" component={History} />
          <StepContext>
            <Route exact path="/form" component={FormMain} />
          </StepContext>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
