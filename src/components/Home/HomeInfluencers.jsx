import React from "react";
import FeaturesPage2 from "../Features/FeaturesInfluencer";
import { MDBContainer } from "mdbreact";
import Navbar from "../Navbar/navbar";
import TestimonialsPage from "../Testimonials/testimonial";
import FooterPagePro from "../Footer/footer";
import IntroInfluencer from "../Intro/IntroInfluencers";
import Partners from "../Partners/partners";

function Influencers() {
  return (
    <div className="App">
        <Navbar />
        <IntroInfluencer/>
        <MDBContainer>
          <FeaturesPage2 />
          <TestimonialsPage />
        </MDBContainer>
        <Partners/>
        <FooterPagePro />
      
    </div>
  );
}

export default Influencers;
