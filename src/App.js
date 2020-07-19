import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/common/Firebase";
import "./App.css";
import Home from "./components/common/Home/HomeDefault";
import Influencers from "./Routes/Influencer";
import Brands from "./Routes/Brands";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/influencers" component={Influencers} />
          <Route path="/brands" component={Brands} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
