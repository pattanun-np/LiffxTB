import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormHome from "./pages/Form/FormHome";
import FormMain from "./pages/Form/FormMain";
import History from "./pages/Form/History";
import Login from "./pages/Form/Login";
import Guide from "./pages/Form/guide";
import { PrivateRoute } from "./Private/PrivateRoute";
const dotenv = require('dotenv')
dotenv.config()
function App() {
  return (
    
    <div className="App container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormHome} />
          <Route path="/login" component={Login} />
          <Route path="/guide" component={Guide} />
          <PrivateRoute exact path="/dashboard" component={History} />
          <Route exact path="/form" component={FormMain} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
