import "./App.css";
import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModesContext } from "./components/providers/modes";

const Home = lazy(() => import("./components/Home"));
const ProfileResult = lazy(() => import("./components/ProfileResult"));
const NotFound = lazy(() => import("./components/NotFound"));

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
