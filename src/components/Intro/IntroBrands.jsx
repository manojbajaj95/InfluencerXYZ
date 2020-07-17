import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdbreact";
import "./IntroBrands.css";

class IntroBrands extends React.Component {
  state = {
    collapseID: "",
    form: {
      name: null,
      email: null,
      message: null,
    },
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      form: {
        ...this.state.form,
        [e.target.id]: e.target.value,
      },
    });
  };

  onSubmit = () => {
    console.log(this.state.form);
  };

  render() {
    const { collapseID } = this.state;
    const navStyle = { marginTop: "65px" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="contactformpage">
        <Router>
          <div>{collapseID && overlay}</div>
        </Router>

        <MDBView>
          <MDBMask overlay="indigo-strong" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center align-items-center"
          >
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="display-4 font-weight-bold">
                  Find the perfect influencers!
                </h1>
                <hr className="hr-light" />
                <h4 className="mb-4">
                  Built to help you discover & collaborate with relevant
                  inlfuencers & content creaters
                </h4>
              </div>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard className="dark-grey-text text-left">
                  <MDBCardBody className="z-depth-2">
                    <h3 className="dark-grey-text text-center">
                      <strong>Register Now:</strong>
                    </h3>
                    <hr />
                    <MDBInput
                      label="Your name"
                      icon="user"
                      id="name"
                      onChange={this.onChange}
                      value={this.state.form.name}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      id="email"
                      onChange={this.onChange}
                      value={this.state.form.email}
                    />
                    <MDBInput
                      label="Your message"
                      icon="pencil-alt"
                      type="textarea"
                      rows="3"
                      id="message"
                      onChange={this.onChange}
                      value={this.state.form.message}
                    />
                    <div className="text-center mt-3 black-text">
                      <MDBBtn color="indigo" onClick={this.onSubmit}>
                        Send
                      </MDBBtn>
                      <hr />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default IntroBrands;
