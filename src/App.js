import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import React, { useState } from "react";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import "./styles.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import Header from "./pages/Header";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <React.Fragment>
      <div>
        {auth ? (
          <Switch>
            <Route path="/signup" auth={auth}>
              <SignUp setAuth={setAuth} />
            </Route>
            <Route path="/signin" auth={auth}>
              <SignIn setAuth={setAuth} />
            </Route>
          </Switch>
        ) : (
          <div>
            <Header setAuth={setAuth} />
            <Switch>
              <Route exact path="/" auth={auth}>
                <Main />
              </Route>
              <Route path="/pageone" auth={auth}>
                <PageOne />
              </Route>
              <Route path="/pagetwo" auth={auth}>
                <PageTwo />
              </Route>
              <Route component={PageNotFound} />
            </Switch>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
