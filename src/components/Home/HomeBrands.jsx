import React from "react";
import AppPage from "../Intro/IntroBrands";
import FeaturesPage from "../Features/FeaturesBrands";
import { MDBContainer } from "mdbreact";
import Navbar from "../Navbar/navbar";
import TestimonialsPage from "../Testimonials/testimonial";
import FooterPagePro from "../Footer/footer";

function Brands() {
  return (
    <div className="App">
      
        <Navbar />
        <AppPage />
        <MDBContainer>
          <FeaturesPage />
          <TestimonialsPage />
        </MDBContainer>
        <FooterPagePro />
    </div>
  );
}

export default Brands;
