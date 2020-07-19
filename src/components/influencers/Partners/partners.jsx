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
              <MDBCol sm="4" md="4" lg="4"><img src="/images/PoqetLogo.webp" width="150"/></MDBCol>
              <MDBCol sm="4" md="4" lg="4"><img src="/images/AroLeap.png" width="150"/></MDBCol>
              <MDBCol sm="4" md="4" lg="4"><img src="/images/Foodle.PNG" width="150"/></MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBCol sm="4" md="4" lg="4"><img src="/images/LittlePunjab.PNG" width="150"/></MDBCol>
            <MDBCol sm="4" md="4" lg="4"><img src="/images/RetakeEntertainement.jpg" width="150"/></MDBCol>
            <MDBCol sm="4" md="4" lg="4"><img src="/images/AcuverConsulting.png" width="150"/></MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBCol sm="4" md="4" lg="4"><img src="/images/BetterHalf.png" width="150"/></MDBCol>
            <MDBCol sm="4" md="4" lg="4"><img src="/images/GreenBubbles.png" width="150"/></MDBCol>
            <MDBCol sm="4" md="4" lg="4"><img src="/images/Tinkerly.png" width="150"/></MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}

export default Partners;