import React, { useState, Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBScrollbar,
  MDBSelect,
  MDBDatePicker,
  MDBRangeInput,
  MDBCollapseHeader,
  MDBCollapse,
  MDBFileInput,
  MDBAlert,
} from "mdbreact";
import Loader from "../../common/Loader/Spinner";
import { withAuthorization } from "../../common/Session";
import * as ENUMS from "../../../constants/enums";

class FormPage extends Component {
  state = {
    loaded: false,
    collapse: 0,
    campaign: {},
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    const campaign = this.props.campaigns.fetchAndUpdate(id);
    this.setState({
      loaded: true,
      campaign,
    });
  };

  onChange = (e) => {
    this.setState({
      campaign: {
        ...this.state.campaign,
        [e.target.id]: e.target.value,
      },
    });
  };

  onApply = () => {
    alert("Your application is submitted");
  };

  getEarnings = () => {
    if (!this.state.loaded) return 0;
    const social = this.props.authUser.social.instagram;
    const cost = this.state.campaign.cost;

    return (
      cost.cpc * social.engagement +
      cost.cpi * social.impressions +
      cost.cpv * social.reach
    );
  };

  render() {
    if (!this.state.loaded) return <Loader />;
    else
      return (
        <MDBContainer className="mt-5 text-left">
          <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
            <strong>Campaign Details</strong>
          </h2>
          <MDBInput
            label="Campaign Name"
            value={this.state.campaign.name}
            id="name"
            disabled
          />
          <MDBInput
            label="Campaign Brief"
            value={this.state.campaign.brief}
            id="contactname"
            disabled
          />
          <MDBSelect
            label="Category"
            options={ENUMS.category}
            value={this.state.campaign.category}
            disabled
          />
          <MDBSelect
            label="Purpose"
            options={ENUMS.purpose}
            value={this.state.campaign.purpose}
            disabled
          />
          <MDBRow around>
            <MDBDatePicker
              label="Start Date"
              value={this.state.campaign.startdate}
              disabled
            />
            <MDBDatePicker
              label="End Date"
              value={this.state.campaign.enddate}
              disabled
            />
          </MDBRow>
          <MDBInput
            label="hashtags"
            value={this.state.campaign.hashtags}
            disabled
          />
          <MDBInput label="link" value={this.state.campaign.link} disabled />
          <MDBAlert color="success">
            <h2>Potential Earnings ₹{this.getEarnings()}</h2>
          </MDBAlert>
          <MDBBtn onClick={this.onApply}>Apply</MDBBtn>
        </MDBContainer>
      );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(FormPage);
