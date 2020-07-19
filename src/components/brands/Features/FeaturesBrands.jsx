import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesBrands = () => {
  return (
    <section className="my-5" id="features">
      <p className="lead black-text w-responsive text-center mx-auto mb-5">
        We help you find the perfect influencer for your campaign to effectively
        convey your message to the right target audience!
      </p>

      <MDBRow>
        <MDBCol lg="5" className="text-center text-lg-left">
          <img
            className="img-fluid"
            src="images/Brand_features_page.png"
            alt=""
          />
        </MDBCol>
        <MDBCol lg="7">
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Sign UP</h5>
              <p className="black-text">
                Share details about your campaign like target group, type of
                campaign, budget and expected reach. We select influencers that
                perfectly fit your requirements!
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Analytics</h5>
              <p className="black-text">
                View real time multi-platform insights of your campaign.
                Customize your dashboard to display the metrics that matter to
                you!
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Hassle Free</h5>
              <p className="black-text">
                Leave the coordination and operational headache to us. Sit back
                and relax as we deliver your targets!
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesBrands;
