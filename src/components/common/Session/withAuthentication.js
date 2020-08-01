import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = (type) => (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: JSON.parse(localStorage.getItem("authUser")),
        setUser: (user) => {
          localStorage.setItem(
            "authUser",
            JSON.stringify({ ...this.state.authUser, ...user })
          );
          this.setState({
            authUser: { ...this.state.authUser, ...user },
          });
        },
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
          if (authUser.submit) {
            this.props.history.push("/" + type + "/dashboard");
          } else {
            this.props.history.push("/" + type + "/registration");
          }
        },
        () => {
          localStorage.removeItem("authUser");
          this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return compose(withRouter, withFirebase)(WithAuthentication);
};

export default withAuthentication;
