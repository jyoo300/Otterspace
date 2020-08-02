import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import WorkspacePage from "./workspace";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import AuthPage from "./auth";
import AboutPage from "./about";
import ContactPage from "./contact";
import FaqPage from "./faq";
import NewPagePage from "./newpage";
import FilterPage from "./filter";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://i.ibb.co/sHqX7n2/Group-63.png"
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/workspace/:section" component={WorkspacePage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/new-page" component={NewPagePage} />

            <Route exact path="/filter" component={FilterPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2020 Otterspace"
            logo="https://i.ibb.co/sHqX7n2/Group-63.png"
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
