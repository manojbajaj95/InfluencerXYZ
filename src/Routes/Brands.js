import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/brands/Navbar/navbar.jsx";
import FooterPagePro from "../components/common/Footer/footer";
import Intro from "../components/brands/Intro/IntroBrands";
import Registration from "../components/influencers/Registration/RegistrationInfluencer";
import Dashboard from "../components/influencers/Dashboard/DashboardPage";
import Profile from "../components/influencers/Dashboard/ProfilePage";

function Influencers() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/brands/intro" component={Intro} />
        // <Route exact path="/brands/registration" component={Registration} />
        // <Route exact path="/brands/dashboard" component={Dashboard} />
        // <Route exact path="/brands/profile" component={Profile} />
      </BrowserRouter>
      <FooterPagePro />
    </div>
  );
}

export default Influencers;
