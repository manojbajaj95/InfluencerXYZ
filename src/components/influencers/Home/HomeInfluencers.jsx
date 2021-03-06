import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FeaturesPage from "../Features/FeaturesInfluencer";
import { MDBContainer } from "mdbreact";
import TestimonialsPage from "../Testimonials/testimonial";
import IntroInfluencer from "../Intro/IntroInfluencers";
import Partners from "../Partners/partners";

function Influencers() {
  return (
    <div className="App">
      <IntroInfluencer />
      <MDBContainer>
        <FeaturesPage />
        <TestimonialsPage />
      </MDBContainer>
      <Partners />
    </div>
  );
}

export default Influencers;
