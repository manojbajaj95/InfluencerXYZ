import React, { Component } from "react";
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
  MDBNavLink,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import Loader from "../../common/Loader/Spinner";
import { withAuthorization } from "../../common/Session";
import * as ENUMS from "../../../constants/enums";

const dictToList = (dict) => {
  var list = [];
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      list.push({ id: key, ...dict[key] });
    }
  }
  return list;
};

const CampaignShort = (props) => {
  const campaign = props.campaign;
  return (
    <MDBCard className="mt-2">
      <MDBCardBody>
        <MDBRow between>
          <p>{campaign.name}</p>
          <MDBNavLink to={`/brands/campaign/add/${campaign.id}`}>
            <MDBIcon icon="edit" />
          </MDBNavLink>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

class FormPage extends Component {
  state = {
    loaded: false,
    campaigns: {
      past: [],
      active: [],
      upcoming: [],
    },
  };

  componentDidMount = () => {
    const allCampaigns = this.props.campaigns.fetchAndUpdate();
    this.setState({
      campaigns: {
        upcoming: dictToList(allCampaigns).filter((campaign) => {
          return campaign.status === 2;
        }),

        active: dictToList(allCampaigns).filter((campaign) => {
          return campaign.status === 1;
        }),
        past: dictToList(allCampaigns).filter((campaign) => {
          return campaign.status === 0;
        }),
      },
      loaded: true,
      collapse: 1,
    });
  };

  render() {
    if (!this.state.loaded) return <Loader />;
    else
      return (
        <MDBContainer className="mt-5 text-left">
          <h2 className="text-center font-weight-bold py-5 my-2">
            <strong>Campaign List</strong>
          </h2>
          <MDBCollapseHeader
            onClick={() => {
              this.setState({
                collapse: 1,
              });
            }}
            className="white-text"
          >
            Active Campaigns{" "}
            <i
              className={
                this.state.collapse === 1
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </MDBCollapseHeader>
          <MDBCollapse id="collabse3" isOpen={this.state.collapse === 1}>
            {this.state.campaigns.active.map((data, index) => {
              return <CampaignShort campaign={data} />;
            })}
          </MDBCollapse>
          <MDBCollapseHeader
            onClick={() => {
              this.setState({
                collapse: 2,
              });
            }}
            className="white-text"
          >
            Upcoming Campaigns{" "}
            <i
              className={
                this.state.collapse === 2
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </MDBCollapseHeader>
          <MDBCollapse id="collabse3" isOpen={this.state.collapse === 2}>
            {this.state.campaigns.upcoming.map((data, index) => {
              return <CampaignShort campaign={data} />;
            })}
          </MDBCollapse>
          <MDBCollapseHeader
            onClick={() => {
              this.setState({
                collapse: 3,
              });
            }}
            className="white-text"
          >
            Past Campaigns{" "}
            <i
              className={
                this.state.collapse === 3
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </MDBCollapseHeader>
          <MDBCollapse id="collabse3" isOpen={this.state.collapse === 3}>
            {this.state.campaigns.past.map((data, index) => {
              return <CampaignShort campaign={data} />;
            })}
          </MDBCollapse>
        </MDBContainer>
      );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(FormPage);
