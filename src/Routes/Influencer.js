import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/influencers/Navbar/navbar.jsx";
import FooterPagePro from "../components/common/Footer/footer";
import Intro from "../components/influencers/Home/HomeInfluencers";
import Registration from "../components/influencers/Registration/RegistrationInfluencer";
import Dashboard from "../components/influencers/Dashboard/DashboardPage";
import Profile from "../components/influencers/Dashboard/ProfilePage";
import { withAuthentication } from "../components/common/Session";

function Influencers() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/influencers/intro" component={Intro} />
      <Route exact path="/influencers/registration" component={Registration} />
      <Route exact path="/influencers/dashboard" component={Dashboard} />
      <Route exact path="/influencers/profile" component={Profile} />
      <FooterPagePro />
    </div>
  );
}

export default withAuthentication(Influencers);
