import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormHome from "./pages/Form/FormHome";
import FormMain from "./pages/Form/FormMain";
import History from "./pages/Form/History";
import Login from "./pages/Form/Login";
import About from "./pages/Form/About";
import UserDashboard from "./pages/Form/UserDashboard";
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
          <Route path="/userdashboard" component={UserDashboard} />
          <Route path="/about" component={About} />
          <PrivateRoute exact path="/dashboard" component={History} />
          <Route exact path="/form" component={FormMain} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
