import React, { useState, useEffect } from "react";
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
import * as exampleUser from "../../../data/influencer.json";
import * as enums from "../../../constants/enums";
import Loader from "../../common/Loader/Spinner";
import { withAuthorization } from "../../common/Session";

const ProfilePage = (props) => {
  const [platform, setPlatform] = useState(0);
  const [user, setUser] = useState(null);
  const social = exampleUser.social;

  useEffect(() => {
    console.log(props.authUser);
    setUser(props.authUser);
  }, []);

  return (
    <>
      {user ? (
        <MDBContainer className="pt-5 mt-5">
          <MDBCard testimonial>
            <MDBCardUp gradient="aqua" />
            <MDBAvatar className="mx-auto white">
              <img
                src="/images/default-profile-picture.jpg"
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
                  <p>Phone: {user.mobile}</p>
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
                  <>
                    <div className="text-left">
                      <span>
                        Instagram Handle: <strong> {user.instagram} </strong>
                      </span>
                    </div>
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
                  </>
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
      ) : (
        <Loader />
      )}
    </>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ProfilePage);
