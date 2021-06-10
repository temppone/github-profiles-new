import "./App.css";
import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModesContext } from "./Repositories/providers/modes";

const Home = lazy(() => import("./Home"));
const ProfileResult = lazy(() => import("./ProfileResult"));
const NotFound = lazy(() => import("./NotFound"));

function App() {
  

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:username" component={ProfileResult} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
