import "./App.css";
import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global";

const Home = lazy(() => import("./components/Home"));
const ProfileResult = lazy(() => import("./components/ProfileResult"));
const NotFound = lazy(() => import("./components/NotFound"));
const Header = lazy(() => import("./components/Header"));

function App() {
  // const { modes, setModes } = React.useContext(ModesContext);
  // setModes("teste");
  // console.log(modes);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
