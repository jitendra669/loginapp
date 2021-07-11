import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <div>
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/dashboard" component={UserDashboard}></Route>
          </Switch>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
