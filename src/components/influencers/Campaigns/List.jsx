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

export const dictToList = (dict) => {
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
    <MDBCard>
      <MDBCardBody>
        <MDBRow between>
          <h3>{campaign.name}</h3>
        </MDBRow>
        <MDBRow between>
          <MDBNavLink to={`/influencers/campaign/view/${campaign.id}`}>
            <MDBBtn>View Details</MDBBtn>
          </MDBNavLink>
          <MDBBtn onClick={props.onApply}>Apply</MDBBtn>
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
    const allCampaigns = this.props.campaigns.fetchAndUpdate();
    this.setState({
      campaigns: dictToList(allCampaigns).filter((campaign) => {
        return campaign.status === 2;
      }),
      loaded: true,
    });
  };

  onApply = () => {
    alert("Your application is submitted.");
  };

  render() {
    console.log(this.state);
    if (!this.state.loaded) return <Loader />;
    else
      return (
        <MDBContainer
          className="mt-5 text-left"
          style={{ "min-height": "100vh" }}
        >
          <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
            <strong>Campaign List</strong>
          </h2>
          {this.state.campaigns.map((data, index) => {
            return <CampaignShort campaign={data} onApply={this.onApply} />;
          })}
        </MDBContainer>
      );
  }
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(List);
