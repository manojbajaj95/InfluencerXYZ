import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import campaigns from "../../../data/campaigns.json";
import influencer from "../../../data/influencer.json";

const withAuthentication = (type) => (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // authUser: JSON.parse(localStorage.getItem("authUser")),
        authUser: influencer,
        setUser: (user) => {
          localStorage.setItem(
            "authUser",
            JSON.stringify({ ...this.state.authUser, ...user })
          );
          this.setState({
            authUser: { ...this.state.authUser, ...user },
          });
        },
        // Campaign id - Campaign
        // In case of users -> This is list of all applied + past campaigns
        campaigns: {
          data: {},
          dirty: true,
          fetchAndUpdate: this.fetchAndUpdateCampaigns,
        },
      };
    }

    fetchAndUpdateCampaigns = (id = null) => {
      if (!this.state.campaigns.dirty) {
        return id ? this.state.campaigns.data[id] : this.state.campaigns.data;
      } else {
        this.setState({
          campaigns: {
            ...this.state.campaigns,
            data: campaigns,
            dirty: false,
          },
        });
        return id ? campaigns[id] : campaigns;
      }
    };

    addOrUpdateCampaign = (campaign, id) => {
      if (id) {
        this.state.campaigns.data[id] = campaign;
      } else {
        const newId = Math.floor(Math.random() * 1000);
        this.state.campaigns.data[newId] = campaign;
      }
    };

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          // TODO: This is temporary
          // this.setState({ authUser });
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
