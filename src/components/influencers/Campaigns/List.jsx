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

const CampaignShort = (props) => {
  const campaign = props.campaign;
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBRow between>
          <h3>{campaign.name}</h3>
        </MDBRow>
        <MDBRow between>
          <MDBNavLink to={`/influencers/campaign/view/${campaign.id}`}>
            <MDBBtn>View Details</MDBBtn>
          </MDBNavLink>
          <MDBBtn>Apply</MDBBtn>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

class List extends Component {
  state = {
    loaded: false,
    campaigns: [],
  };

  componentDidMount = () => {
    this.props.firebase.getFromDB("campaigns").then((result) => {
      console.log(result);
      this.setState({
        campaigns: result,
        loaded: true,
      });
    });
  };

  render() {
    if (!this.state.loaded) return <Loader />;
    else
      return (
        <MDBContainer className="mt-5 text-left">
          <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
            <strong>Campaign List</strong>
          </h2>
          {this.state.campaigns.map((data, index) => {
            return <CampaignShort campaign={data} />;
          })}
        </MDBContainer>
      );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(List);
