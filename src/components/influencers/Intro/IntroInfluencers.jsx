import React from "react";
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
import { withFirebase } from "../../common/Firebase";

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
    const { email, password } = this.state.form;
    this.props.firebase.doSignUpOrSignIn(email, password).then((e) => {
      if (e) alert("Sign In success");
      else
        alert("Failed to sign up. Please try again later or contact support");
    });
  };

  render() {
    return (
      <section id="home">
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
                  className=" text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="white-text h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h5 className=" white-text mb-4">
                    Create your profile in seconds and get visibility from
                    hundreds of partner brands. Finding collaborations has never
                    been easier!
                  </h5>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className=" text-left">
                        <h3 className="white-text text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          value={this.state.form.email}
                          id="email"
                          onChange={this.onChange}
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
      </section>
    );
  }
}

export default withFirebase(IntroInfluencers);
