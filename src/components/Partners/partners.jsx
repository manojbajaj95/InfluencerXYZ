import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const Partners = () => {
  return (
    <>
      <h3>Featured Partners</h3>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} interval={3000} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
              <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
              <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
              <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            <MDBCol sm="3" md="3" lg="3"><img src="/images/logo.png" width="150"/></MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}

export default Partners;