import React, { useState, Component } from "react";
import {
  MDBContainer,
  MDBView,
  MDBMask,
  MDBBox,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBNavLink,
  MDBIcon,
  MDBBtn,
  MDBBtnGroup,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCollapse,
  MDBCollapseHeader,
  MDBNavbar,
} from "mdbreact";
import exampleInfluencer from "../../../data/influencer.json";
import Loader from "../../common/Loader/Spinner";
import { withAuthorization } from "../../common/Session";

const campaignToRow = (campaign) => {
  const rows = [
    {
      metric: "Impression",
      value: campaign.reach,
      cost: campaign.cost.cpi,
      revenue: campaign.cost.cpi * campaign.reach,
    },
    {
      metric: "Conversions",
      value: campaign.conversions,
      cost: campaign.cost.cpv,
      revenue: campaign.cost.cpv * campaign.conversions,
    },
    {
      metric: "Clicks",
      value: campaign.clicks,
      cost: campaign.cost.cpc,
      revenue: campaign.cost.cpc * campaign.clicks,
    },
  ];
  return rows;
};

const columns = [
  { label: "Metric", field: "metric" },
  { label: "Value", field: "value" },
  { label: "Cost", field: "cost" },
  { label: "Revenue", field: "revenue" },
];

class DashboardPage extends Component {
  state = {
    allCampaigns: {},
    userCampaigns: [],
    selected: 0,
    open: 0,
  };

  componentDidMount() {
    const userCampaigns = [];
    const allCampaigns = this.props.campaigns.fetchAndUpdate();
    exampleInfluencer.campaigns.map((data) => {
      userCampaigns.push({ ...data, ...allCampaigns[data.id] });
    });
    this.setState({
      userCampaigns: userCampaigns,
    });
  }

  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  setSelected = (value) => {
    this.setState({
      selected: value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <MDBView className="container-fluid min-vh-100">
        {false ? (
          <Loader />
        ) : (
          <MDBContainer className="mt-5 py-5">
            <MDBRow between className="my-2">
              <MDBCol className="my-2">
                <MDBBtn className="m-0 p-0" onClick={() => this.setSelected(0)}>
                  <MDBCard cascade className="w-100">
                    <MDBCardBody cascade>
                      <MDBCardTitle className="dark-text">
                        Past Campaigns
                      </MDBCardTitle>
                      <hr />
                      <MDBCardText>Revisit previous campaigns</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBBtn>
              </MDBCol>
              <MDBCol className="my-2">
                <MDBBtn className="m-0 p-0" onClick={() => this.setSelected(1)}>
                  <MDBCard cascade className="w-100">
                    <MDBCardBody cascade>
                      <MDBCardTitle className="dark-text">
                        Active Campaigns
                      </MDBCardTitle>
                      <hr />
                      <MDBCardText>See your ongoing campaigns</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <section id="campaigns" className="my-2">
              {this.state.userCampaigns
                .filter((campaign) => {
                  return campaign.status == this.state.selected;
                })
                .map((data, index) => {
                  return (
                    <>
                      <MDBCollapseHeader
                        onClick={() => this.setOpen(index)}
                        className="text-left white-text"
                      >
                        {data.name}
                        <i
                          className={
                            this.state.open === index
                              ? "fa fa-angle-down rotate-icon"
                              : "fa fa-angle-down"
                          }
                        />
                      </MDBCollapseHeader>
                      <MDBCollapse
                        id={data.id}
                        isOpen={this.state.open === index}
                      >
                        <MDBCard>
                          <MDBCardBody>
                            <MDBCollapse className="p-0" navbar isOpen={true}>
                              <MDBBtn disabled>All</MDBBtn>
                              <MDBBtn>Instagram</MDBBtn>
                              <MDBBtn disabled>Youtube</MDBBtn>
                              <MDBBtn disabled>Twitter</MDBBtn>
                              <MDBBtn disabled>Facebook</MDBBtn>
                            </MDBCollapse>
                            <MDBTable responsive>
                              <MDBTableHead columns={columns} />
                              <MDBTableBody rows={campaignToRow(data)} />
                            </MDBTable>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCollapse>
                    </>
                  );
                })}
            </section>
          </MDBContainer>
        )}
      </MDBView>
    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(DashboardPage);
