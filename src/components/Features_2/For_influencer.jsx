import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage2 = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        For Influencers
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Create your profile in 2 easy steps and get the eyeballs from hundreds of partner brands!
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
            Share basic details to create your profile like type of content, average views etc and we will pick you for the campaign that fits your niche!
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Easy Leads</h5>
              <p className="grey-text">
              With hundreds of brand partners on board, allow us to do the heavy-lifting and get you collaborations!
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Convenience</h5>
              <p className="grey-text">
                Do what you love, create content with complete peace of mind, while we work to get you the projects you deserve!
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage2;
