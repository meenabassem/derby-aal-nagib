import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tab2 from "../../pages/Tab2";

import {NavBar} from "components/Navbar/Navbar";
import {HomePage} from "pages/Home/HomePage";

const Tab4 = () => {
  return <div>Tab4</div>;
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <Tab4 />
        </Route>
        <Route path="/users">
          <Tab2 />
        </Route>
      </Switch>
    </Router>
  );
};
export { AppRouter };
