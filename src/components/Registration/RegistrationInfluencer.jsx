import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBStep,
  MDBStepper,
} from "mdbreact";

const FormPage = () => {
  const [active, setActive] = useState(1);
  return (
    <MDBContainer className="mt-5">
      <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
        <strong>Registration form</strong>
      </h2>
      <MDBStepper icon>
        <MDBStep
          far
          icon="folder-open"
          stepName="Basic Information"
          onClick={() => setActive(1)}
        ></MDBStep>
        <MDBStep
          icon="pencil-alt"
          stepName="Social Accounts"
          onClick={() => setActive(2)}
        ></MDBStep>
        <MDBStep
          icon="photo"
          stepName="Terms and Conditions"
          onClick={() => setActive(3)}
        ></MDBStep>
        <MDBStep
          icon="check"
          stepName="Finish"
          onClick={() => setActive(4)}
        ></MDBStep>
      </MDBStepper>
      <form>
        {active == 1 ? (
          <>
            <MDBRow between>
              <MDBIcon fab icon="phone" size="5x" />
              <MDBInput label="Name" />
              <MDBIcon icon="check" />
            </MDBRow>
            <MDBRow between>
              <MDBIcon fab icon="phone" size="5x" />
              <MDBInput label="Mobile No." />
              <MDBIcon icon="check" />
            </MDBRow>
          </>
        ) : active == 2 ? (
          <>
            <MDBRow between>
              <MDBIcon fab icon="instagram" size="5x" />
              <MDBInput label="Instagram Handle" />
              <MDBIcon icon="check" />
            </MDBRow>
            <MDBRow between className="mt-2">
              <MDBIcon fab icon="youtube" size="5x" />
              <MDBInput label="Youtube Channel" />
              <MDBIcon icon="check" />
            </MDBRow>
            <MDBRow between className="mt-2">
              <MDBIcon fab icon="facebook" size="5x" />
              <MDBInput label="Facebook Profile" />
              <MDBIcon icon="check" />
            </MDBRow>
            <MDBRow between className="mt-2">
              <MDBIcon fab icon="twitter" size="5x" />
              <MDBInput label="Twitter Handle" />
              <MDBIcon icon="check" />
            </MDBRow>
          </>
        ) : active == 3 ? (
          <MDBBtn>Accept terms and conditions!</MDBBtn>
        ) : (
          <MDBBtn>Submit</MDBBtn>
        )}
        <MDBRow between>
          <MDBBtn>Previous</MDBBtn>
          <MDBBtn>Next</MDBBtn>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default FormPage;

