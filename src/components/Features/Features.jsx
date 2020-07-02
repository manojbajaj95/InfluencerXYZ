import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        For Brands
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        We help you find the perfect influencer for your campaign to effectively convey your message to the right target audience!
      </p>

      <MDBRow>
        <MDBCol lg="5" className="text-center text-lg-left">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
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
              <p className="grey-text">
            Share details about your campaign like target group, type of campaign, budget and expected reach. We select influencers that perfectly fit your requirements!
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Analytics</h5>
              <p className="grey-text">
              View real time funnel data and see the performance of your campaign. We will customize your dashboard to display the metrics that matter to you!
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Hassle Free</h5>
              <p className="grey-text">
                Leave the negotiation, coordination and operational headache to us. Sit back and relax as we deliver your targets!
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage;
