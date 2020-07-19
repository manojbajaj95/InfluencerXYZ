import React from "react";
import { MDBBox, MDBView } from "mdbreact";
import styles from "./app.module.css";

const NotFoundPage = () => {
  return (
    <MDBView className={`${styles.view} text-center`}>
      <MDBBox
        display="flex"
        style={{
          placeContent: "center",
          paddingTop: "350px",
        }}
      >
        <div>
          <h1>
            <strong className="align-middle">404. That's an error</strong>
          </h1>
          <div>The requested URL was not found on this server.</div>
        </div>
      </MDBBox>
    </MDBView>
  );
};

export default NotFoundPage;
