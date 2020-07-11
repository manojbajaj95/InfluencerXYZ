import React from "react";
import { withRouter } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";
import "./IntroInfluencers.css";
import * as firebase from "firebase/app";
import "firebase/auth";

class IntroInfluencers extends React.Component {
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
    console.log(this.state.form);
    firebase
      .auth()
      .fetchSignInMethodsForEmail(this.state.form.email)
      .then((e) => {
        if (e.length) {
          firebase
            .auth()
            .signInWithEmailAndPassword(
              this.state.form.email,
              this.state.form.password
            )
            .then(() => {
              alert("Sign In success");
              this.props.history.push("/form");
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === "auth/wrong-password") {
                alert("Wrong password.");
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.state.form.email,
              this.state.form.password
            )
            .then(() => {
              alert("Sign up user success");
              this.props.history.push("/form");
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == "auth/weak-password") {
                alert("The password is too weak.");
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorMessage);
        console.log(error);
      });
    // If user exists sign In instead
    // firebase.auth().signInWithEmailAndPassword(email, password);
  };

  render() {
    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="mt-5  d-flex justify-content-center align-items-center"
          >
            <MDBRow>
              <MDBAnimation
                type="fadeInLeft"
                delay=".3s"
                className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
              >
                <h1 className="h1-responsive font-weight-bold">
                  Sign up right now!
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Create your profile in seconds and get visibility from
                  hundreds of partner brands. Finding collaborations has never
                  been easier!
                </h6>
                <MDBBtn outline color="white">
                  Learn More
                </MDBBtn>
              </MDBAnimation>

              <MDBCol md="6" xl="5" className="mb-4">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="white-text text-left">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Register:
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput
                        className="white-text"
                        iconClass="white-text"
                        label="Your email"
                        icon="envelope"
                        value={this.state.form.email}
                        id="email"
                        onChange={this.onChange}
                      />
                      <MDBInput
                        className="white-text"
                        iconClass="white-text"
                        label="Your password"
                        icon="lock"
                        type="password"
                        value={this.state.form.password}
                        id="password"
                        onChange={this.onChange}
                      />
                      <div className="text-center mt-4 black-text">
                        <MDBBtn color="indigo" onClick={this.onSubmit}>
                          Sign Up
                        </MDBBtn>
                        <hr className="hr-light" />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default withRouter(IntroInfluencers);

