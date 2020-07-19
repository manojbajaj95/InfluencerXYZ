import React, { useState } from "react";
import {
  MDBContainer,
  MDBSelect,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBAvatar,
  MDBCardUp,
  MDBCardTitle,
  MDBCol,
  MDBBox,
  MDBView,
} from "mdbreact";
import * as user from "../../../data/influencer.json";
import * as enums from "../../../constants/enums";
import { withAuthorization } from "../../common/Session";

const ProfilePage = () => {
  const social = user.social;
  const [platform, setPlatform] = useState(0);
  return (
    <>
      {true ? (
        <MDBView className="container-fluid min-vh-100">
          <MDBBox
            display="flex"
            style={{
              placeContent: "center",
              paddingTop: "350px",
            }}
          >
            <div>
              <h1>
                <strong className="align-middle">
                  We are in process of verifying your account.
                </strong>
              </h1>
              <div>Please check back later.</div>
            </div>
          </MDBBox>
        </MDBView>
      ) : (
        <MDBContainer className="pt-5 mt-5">
          <MDBCard testimonial>
            <MDBCardUp gradient="aqua" />
            <MDBAvatar className="mx-auto white">
              <img
                src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg"
                alt="profile-img"
              />
            </MDBAvatar>
            <MDBCardTitle>
              <h2>Welcome {user.name}...</h2>{" "}
            </MDBCardTitle>
            <MDBCardBody>
              <div>
                <h4>Personal Information</h4>
                <div className="text-left">
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              </div>
              <hr />
              <div>
                <h4>Social Accounts</h4>
                <MDBSelect
                  options={enums.platforms}
                  label="Instagram"
                  disabled
                />

                {platform == 0 && social.instagram ? (
                  <section id="instagram">
                    <MDBRow between>
                      <MDBCol xs="6" md="6" sm="12">
                        <MDBCard className="p-2 z-depth-2 m-2">
                          <MDBCardTitle>Followers</MDBCardTitle>
                          <MDBCardBody>
                            <h2>{social.instagram.followers}</h2>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol xs="6" md="6" sm="12">
                        <MDBCard className="p-2 z-depth-2 m-2">
                          <MDBCardTitle>Posts</MDBCardTitle>
                          <MDBCardBody>
                            <h2>{social.instagram.posts}</h2>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol xs="6" md="6" sm="12">
                        <MDBCard className="p-2 z-depth-2 m-2">
                          <MDBCardTitle>Reach</MDBCardTitle>
                          <MDBCardBody>
                            <h2>{social.instagram.reach}</h2>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol xs="6" md="6" sm="12">
                        <MDBCard className="p-2 z-depth-2 m-2">
                          <MDBCardTitle>Engagement rate</MDBCardTitle>
                          <MDBCardBody>
                            <h2>{social.instagram.engagement}</h2>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </section>
                ) : null}
                {platform == 1 && social.youtube ? (
                  <section id="youtube">
                    <p>Total Followers: {social.instagram.followers} </p>
                    <p>Total Posts: {social.instagram.posts}</p>
                    <p>Average Reach per post:{social.instagram.reach} </p>
                    <p>
                      Avgerage Impressions per post:
                      {social.instagram.impressions}{" "}
                    </p>
                    <p>Engagement Rate: {social.instagram.engagement} </p>
                  </section>
                ) : null}
                {platform == 2 && social.twitter ? (
                  <section id="instagram">
                    <p>Total Followers: {social.instagram.followers} </p>
                    <p>Total Posts: {social.instagram.posts}</p>
                    <p>Average Reach per post:{social.instagram.reach} </p>
                    <p>
                      Avgerage Impressions per post:
                      {social.instagram.impressions}{" "}
                    </p>
                    <p>Engagement Rate: {social.instagram.engagement} </p>
                  </section>
                ) : null}
                {platform == 3 && social.facebook ? (
                  <section id="instagram">
                    <p>Total Followers: {social.instagram.followers} </p>
                    <p>Total Posts: {social.instagram.posts}</p>
                    <p>Average Reach per post:{social.instagram.reach} </p>
                    <p>
                      Avgerage Impressions per post:
                      {social.instagram.impressions}{" "}
                    </p>
                    <p>Engagement Rate: {social.instagram.engagement} </p>
                  </section>
                ) : null}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      )}
    </>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ProfilePage);
