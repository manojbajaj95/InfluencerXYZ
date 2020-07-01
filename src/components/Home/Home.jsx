import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MinimalisticIntro from "../Intro/Intro";
import FeaturesPage from "../Features/Features";
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
          <hr />
          <TestimonialsPage />
        </MDBContainer>
        <FooterPagePro />
      </Router>
    </div>
  );
}

export default Home;
