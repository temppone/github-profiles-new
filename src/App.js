import "./App.css";
import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global";
import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home"));
const ProfileResult = lazy(() => import("./components/ProfileResult"));
const NotFound = lazy(() => import("./components/NotFound"));
const Header = lazy(() => import("./components/Header"));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:username" component={ProfileResult} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
