import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          if (!condition(authUser)) {
            this.props.history.push("/");
          }
        },
        () => this.props.history.push("/")
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {({ authUser, setUser }) => (
            <Component {...this.props} authUser={authUser} setUser={setUser} />
          )}
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
