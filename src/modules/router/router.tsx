import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tab2 from "../../pages/Tab2";
import {AppNavBar} from "components/Navbar/AppNavBar";
import {HomePage} from "pages/Home/HomePage";
import {AppFooter} from "components/Footer/AppFooter";
import {TermsAndConditionsPage} from "pages/Terms/TermsAndConditions/TermsAndConditionsPage";
import {Agents} from "pages/Contact/Agents/Agents";
import {Enquiries} from "pages/Contact/Enquiries/Enquiries";
import {LivePage} from "pages/Live/LivePage";
import {Gallery_PicturesPage} from "pages/Gallery_Pictures/Galley_PicturesPage";
import {Gallery_VideosPage} from "pages/Gallery_Videos/Gallery_VideosPage";

const Tab4 = () => {
  return <div>Tab4</div>;
};

const AppRouter = () => {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route
          path="/terms/terms-and-conditions"
          children={<TermsAndConditionsPage />}
        />
        <Route path="/contact/agents" children={<Agents />} />
        <Route path="/contact/enquiries" children={<Enquiries />} />
        <Route path="/live" children={<LivePage />} />

        <Route path="/gallery/pictures" children={<Gallery_PicturesPage />} />
        <Route path="/gallery/videos" children={<Gallery_VideosPage />} />
        <Route path="/about">
          <Tab4 />
        </Route>
        <Route path="/users">
          <Tab2 />
        </Route>
        {/*  the path '/' should be the last one*/}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <AppFooter />
    </Router>
  );
};
export { AppRouter };
