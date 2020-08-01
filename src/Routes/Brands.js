import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../components/brands/Navbar/navbar.jsx";
import FooterPagePro from "../components/common/Footer/footer";
import Intro from "../components/brands/Intro/IntroBrands";
import Registration from "../components/brands/Registration/Registration";
import { withAuthentication } from "../components/common/Session";
import DashboardPage from "../components/brands/Dashboard/DashboardPage.js";
import AddCampaign from "../components/brands/Campaigns/Add";
import CampaignList from "../components/brands/Campaigns/List";

function Influencers() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/brands/intro" component={Intro} />
      <Route exact path="/brands/registration" component={Registration} />
      <Route exact path="/brands/dashboard" component={DashboardPage} />
      <Route exact path="/brands/campaigns" component={CampaignList} />
      <Route exact path="/brands/campaign/add/:id?" component={AddCampaign} />
      <FooterPagePro />
    </div>
  );
}

export default withAuthentication("brands")(Influencers);
