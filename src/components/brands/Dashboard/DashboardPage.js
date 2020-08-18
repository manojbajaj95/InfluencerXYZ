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
import { HorizontalBar, Pie } from "react-chartjs-2";
import Loader from "../../common/Loader/Spinner";
import { withAuthorization } from "../../common/Session";

const campaignToRow = (campaign) => {
  const rows = [
    {
      metric: "Influencers",
      value: 100,
      cost: "-",
      revenue: "-",
    },
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
const dictToList = (dict) => {
  var list = [];
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      list.push({ id: key, ...dict[key] });
    }
  }
  return list;
};

class DashboardPage extends Component {
  state = {
    allCampaigns: {},
    userCampaigns: [],
    selected: 0,
    open: 0,
    dataPie: {
      labels: ["Men", "Women"],
      datasets: [
        {
          data: [250, 500],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"],
        },
      ],
    },
    dataPieAge: {
      labels: ["18-22", "23-24", "25-28", "29-36", "37+"],
      datasets: [
        {
          data: [250, 500, 100, 200, 600],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#616774",
            "#DA92DB",
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#616774",
            "#DA92DB",
          ],
        },
      ],
    },
    dataHorizontal: {
      labels: [
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Ahmedabad",
        "Other",
        "Jaipur",
        "Kolkata",
      ],
      datasets: [
        {
          label: "Geography",
          data: [22, 33, 55, 12, 86, 23, 14],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 0,
        },
      ],
    },
  };

  componentDidMount() {
    const allCampaigns = this.props.campaigns.fetchAndUpdate();
    this.setState({
      userCampaigns: dictToList(allCampaigns),
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
                  return campaign.status === this.state.selected;
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
                            <MDBCardTitle>
                              <MDBRow around>
                                <h2>Influencers Engaged 100</h2>
                                <h2>Total Reach 100</h2>
                                <h2>Total Posts 100</h2>
                              </MDBRow>
                            </MDBCardTitle>
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
                            <h3>Audience Insights</h3>
                            <Pie
                              data={this.state.dataPie}
                              options={{ responsive: true }}
                            />
                            <label>Sex</label>
                            <Pie
                              data={this.state.dataPieAge}
                              options={{ responsive: true }}
                            />
                            <label>Age</label>
                            <HorizontalBar
                              data={this.state.dataHorizontal}
                              options={{ responsive: true }}
                            />
                            <label>Geography</label>
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
