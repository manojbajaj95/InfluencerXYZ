import React from "react";
import Particles from "particlesjs";
import {
  MDBNavLink,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import "./Intro.css";

class IntroDefault extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            <MDBRow>
              <MDBCol md="6" className="text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Influence Away!
                  </h1>
                  <hr className="hr-light" />
                  <h4 className="mb-4">
                    Brindging the gap between brands and influencers
                  </h4>
                  <h5>Influencer Search + Impact Analysis</h5>
                  <MDBNavLink to="/brands">
                    <MDBBtn color="white">For Brands</MDBBtn>
                  </MDBNavLink>
                  <MDBNavLink to="/influencers">
                    <MDBBtn outline color="white">
                      For Influencers
                    </MDBBtn>
                  </MDBNavLink>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default IntroDefault;
