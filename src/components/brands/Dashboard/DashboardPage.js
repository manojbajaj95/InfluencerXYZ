import React, { useState } from "react";
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
      cost: campaign.cpi,
      revenue: campaign.cpi * campaign.reach,
    },
    {
      metric: "Conversions",
      value: campaign.conversions,
      cost: campaign.cpv,
      revenue: campaign.cpv * campaign.conversions,
    },
    {
      metric: "Clicks",
      value: campaign.clicks,
      cost: campaign.cpc,
      revenue: campaign.cpc * campaign.clicks,
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

const DashboardPage = () => {
  const [campaigns, setCampaigns] = useState(exampleInfluencer.campaigns);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(0);

  return (
    <MDBView className="container-fluid min-vh-100">
      {true ? (
        <h3 className="mt-5 pt-5">Sorry no campaign found</h3>
      ) : (
        <MDBContainer className="mt-5 py-5">
          <MDBRow between className="my-2">
            <MDBCol className="my-2">
              <MDBBtn className="m-0 p-0" onClick={() => setSelected(0)}>
                <MDBCard cascade className="w-100">
                  <MDBCardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
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
              <MDBBtn className="m-0 p-0" onClick={() => setSelected(0)}>
                <MDBCard cascade className="w-100">
                  <MDBCardImage
                    top
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                    overlay="white-slight"
                    hover
                    waves
                    alt="MDBCard image cap"
                  />
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
            {campaigns.map((data, index) => {
              return (
                <>
                  <MDBCollapseHeader
                    onClick={() => setOpen(index)}
                    className="text-left white-text"
                  >
                    Campaign Name
                    <i
                      className={
                        open === index
                          ? "fa fa-angle-down rotate-icon"
                          : "fa fa-angle-down"
                      }
                    />
                  </MDBCollapseHeader>
                  <MDBCollapse id={data.id} isOpen={open === index}>
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
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(DashboardPage);
