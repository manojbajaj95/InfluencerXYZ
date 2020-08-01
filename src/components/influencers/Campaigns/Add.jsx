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
    if (id) {
      this.props.firebase.db
        .collection("campaigns")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.setState({
              campaign: {
                ...doc.data(),
              },
            });
          } else {
            // Probably a new user or db connectivity down
            // ignore
          }
        });
    }
    this.setState({
      loaded: true,
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

  setDate = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  getDate = (value) => {
    return new Date();
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
            onChange={this.onChange}
            id="name"
          />
          <MDBInput
            label="Campaign Brief"
            value={this.state.campaign.contactname}
            onChange={this.onChange}
            id="contactname"
          />
          <MDBSelect label="Category" options={ENUMS.category} />
          <MDBSelect label="Purpose" options={ENUMS.purpose} />
          <MDBRow around>
            <MDBDatePicker
              label="Start Date"
              getValue={(v) => this.setDate("startdate", v)}
            />
            <MDBDatePicker
              label="End Date"
              getValue={(v) => this.setDate("enddate", v)}
            />
          </MDBRow>
          <MDBInput label="hashtags" />
          <MDBInput label="link" />
          <MDBFileInput label="Campaign Media" />
        </MDBContainer>
      );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(FormPage);
