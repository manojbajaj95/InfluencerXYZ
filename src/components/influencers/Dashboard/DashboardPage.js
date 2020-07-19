import React from "react";
import { MDBContainer, MDBView, MDBMask, MDBBox } from "mdbreact";
import { withAuthorization } from "../../common/Session";

const DashboardPage = () => {
  return (
    <MDBView className="container-fluid min-vh-100">
      {true ? (
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
      ) : (
        <MDBContainer className="mt-5  d-flex justify-content-center align-items-center h-100 w-100"></MDBContainer>
      )}
    </MDBView>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(DashboardPage);
