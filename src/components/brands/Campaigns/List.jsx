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
    campaigns: [],
  };

  componentDidMount = () => {
    this.props.firebase
      .getFromDB("campaigns", this.props.authUser.uid)
      .then((result) => {
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
export default withAuthorization(condition)(FormPage);
