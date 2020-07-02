import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MinimalisticIntro from "../Intro/Intro";
import FeaturesPage from "../Features/Features";
import FeaturesPage2 from "../Features_2/For_influencer";
import { MDBContainer } from "mdbreact";
import Navbar from "../Navbar/navbar";
import TestimonialsPage from "../Testimonials/testimonial";
import FooterPagePro from "../Footer/footer";

function Home() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MinimalisticIntro />
        <MDBContainer>
          <FeaturesPage />
          <FeaturesPage2 />
          <hr />
          <TestimonialsPage />
        </MDBContainer>
        <FooterPagePro />
      </Router>
    </div>
  );
}

export default Home;
