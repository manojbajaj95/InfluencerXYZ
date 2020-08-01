import React from "react";
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
import { withFirebase } from "../../common/Firebase";
import "./IntroBrands.css";

class IntroBrands extends React.Component {
  state = {
    collapseID: "",
    form: {
      email: null,
      password: null,
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
    const { email, password } = this.state.form;
    this.props.firebase.doSignUpOrSignIn(email, password).then((e) => {
      if (e)
        // Signin/SignUp success
        alert("Sign In success");
      else
        alert("Failed to sign up. Please try again later or contact support");
    });
  };

  render() {
    return (
      <div id="contactformpage">
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
                      <strong>Register Now</strong>
                    </h3>
                    <hr />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      id="email"
                      onChange={this.onChange}
                      value={this.state.form.email}
                    />
                    <MDBInput
                      iconClass="white-text"
                      label="Your password"
                      icon="lock"
                      type="password"
                      value={this.state.form.password}
                      id="password"
                      onChange={this.onChange}
                    />
                    <div className="text-center mt-3 black-text">
                      <MDBBtn color="indigo" onClick={this.onSubmit}>
                        Get Started
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

export default withFirebase(IntroBrands);
