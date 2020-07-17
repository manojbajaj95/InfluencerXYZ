import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/HomeDefault";
import Influencers from "./components/Home/HomeInfluencers";
import Brands from "./components/Home/HomeBrands";
import FormPage from "./components/Registration/RegistrationInfluencer";
import Dashboard from "./components/Dashboard/DashboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/influencers" component={Influencers} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
