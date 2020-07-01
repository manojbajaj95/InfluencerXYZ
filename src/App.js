import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MinimalisticIntro from "./components/Intro/Intro";
import FeaturesPage from "./components/Features/Features";
import { MDBContainer } from "mdbreact";
import Navbar from "./components/Navbar/navbar";
import TestimonialsPage from "./components/Testimonials/testimonial";
import FooterPagePro from "./components/Footer/footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/influencers" component={FeaturesPage} />
          <Route exact path="/brands" component={FeaturesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
