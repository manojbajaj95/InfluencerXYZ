import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact";
import "./Intro.css";

class MinimalisticIntro extends React.Component {
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
      <div id="minimalistintro">
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg">
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "17rem" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                  Minimalist intro
                </h1>
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase mb-4 white-text ">
                  <strong>Photography & design</strong>
                </h5>
                <MDBNavLink to="/influencers">
                  <MDBBtn outline color="white">
                    portfolio
                  </MDBBtn>
                </MDBNavLink>
                <MDBNavLink to="/brands">
                  <MDBBtn outline color="white">
                    About me
                  </MDBBtn>
                </MDBNavLink>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default MinimalisticIntro;
