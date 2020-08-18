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
    const campaign = this.props.campaigns.fetchAndUpdate(id);
    this.setState({
      loaded: true,
      campaign,
    });
  };

  onSubmit = () => {
    const id = this.props.match.params.id;
    this.props.firebase
      .addOrUpdateDB(
        "campaigns",
        {
          ...this.state.campaign,
          uid: this.props.authUser.uid,
        },
        id
      )
      .then(
        this.props.history.push("/brands/dashboard"),
        alert("Your campaign is created.")
      )
      .catch(function () {
        alert("Failed to create campaign. Please reach out to support team.");
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
            <strong>Create New Camapign</strong>
          </h2>
          <form>
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
            <MDBCollapseHeader
              onClick={() => {
                this.setState({
                  collapse: 0,
                });
              }}
              className="white-text"
            >
              Goal
              <i
                className={
                  this.state.collapse === 0
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={this.state.collapse === 0}>
              <MDBInput type="number" label="Reach" />
              <MDBInput type="number" label="Impression " />
              <MDBInput type="number" label="Engagement" />
              <MDBInput type="number" label="Clicks" />
              <MDBInput type="number" label="Conversions" />
            </MDBCollapse>
            <MDBCollapseHeader
              onClick={() => {
                this.setState({
                  collapse: 1,
                });
              }}
              className="white-text"
            >
              Cost
              <i
                className={
                  this.state.collapse === 1
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={this.state.collapse === 1}>
              <MDBInput type="number" label="Cost per thousand impressions" />
              <MDBInput type="number" label="Cost per View " />
              <MDBInput type="number" label="Cost per Click " />
              <MDBInput type="number" label="Cost per conversions " />
              <MDBInput type="number" label="Total Budget" />
            </MDBCollapse>
            <MDBCollapseHeader
              onClick={() => {
                this.setState({
                  collapse: 2,
                });
              }}
              className="white-text"
            >
              Demographics
              <i
                className={
                  this.state.collapse === 2
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collabse2" isOpen={this.state.collapse === 2}>
              <MDBSelect multiple label="Platform" options={ENUMS.platforms} />
              <MDBSelect multiple label="Sex" options={ENUMS.sex} />
              <p>Min Age: 5</p>
              <MDBRangeInput label="Min Age" />
              <p>Max Age: 5</p>
              <MDBRangeInput label="Max Age" />
              <MDBSelect
                multiple
                label="Target geography"
                options={ENUMS.geography}
              />
            </MDBCollapse>
            <MDBCollapseHeader
              onClick={() => {
                this.setState({
                  collapse: 3,
                });
              }}
              className="white-text"
            >
              More Details
              <i
                className={
                  this.state.collapse === 3
                    ? "fa fa-angle-down rotate-icon"
                    : "fa fa-angle-down"
                }
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collabse3" isOpen={this.state.collapse === 3}>
              <MDBInput label="hashtags" />
              <MDBInput label="link" />
              <MDBFileInput label="Campaign Media" />
            </MDBCollapse>
            <MDBRow around>
              <MDBBtn onClick={this.onSubmit} color="blue">
                Create
              </MDBBtn>
            </MDBRow>
          </form>
        </MDBContainer>
      );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(FormPage);
