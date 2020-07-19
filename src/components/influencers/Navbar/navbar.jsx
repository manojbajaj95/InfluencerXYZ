import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBSmoothScroll,
  MDBBtn,
} from "mdbreact";
import { withFirebase } from "../../common/Firebase";

const SignOutLinks = () => {
  return (
    <MDBNavbarNav right>
      <MDBNavItem active>
        <MDBNavLink to="/influencers/intro">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBSmoothScroll to="features">Features</MDBSmoothScroll>
      </MDBNavItem>
      <MDBNavItem>
        <MDBSmoothScroll to="testimonial">Testimonials</MDBSmoothScroll>
      </MDBNavItem>
    </MDBNavbarNav>
  );
};

const SignInLinks = (props) => {
  return (
    <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink to="/influencers/dashboard">Dashboard</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/influencers/profile">Profile</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/influencers/profile">Campaigns</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBBtn size="sm" onClick={props.logOut}>
          Log Out
        </MDBBtn>
      </MDBNavItem>
    </MDBNavbarNav>
  );
};
class Navbar extends React.Component {
  state = {
    collapsed: false,
    user: null,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { collapsed } = this.state;
    const navStyle = { marginTop: "0rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "primary-color" }}
        onClick={this.handleTogglerClick}
      />
    );
    const user = this.props.firebase.auth.currentUser;
    return (
      <div>
        <MDBNavbar
          color="#006494"
          style={navStyle}
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className="white-text">Influence Away</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
              {user ? (
                <SignInLinks logOut={this.props.firebase.doSignOut} />
              ) : (
                <SignOutLinks />
              )}
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapsed && overlay}
      </div>
    );
  }
}

export default withFirebase(Navbar);
