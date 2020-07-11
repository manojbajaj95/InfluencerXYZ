import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer className="mt-5">
  <form>
s
<MDBRow around>
    <MDBIcon fab icon="phone" size="5x" />
    <MDBInput label="Mobile No." />
    <MDBIcon icon="check" />
  </MDBRow>
  <MDBRow around>
    <MDBIcon fab icon="instagram" size="5x" />
    <MDBInput label="Instagram Handle" />
    <MDBIcon icon="check" />
  </MDBRow>
  <MDBRow around className="mt-2">
    <MDBIcon fab icon="youtube" size="5x" />
    <MDBInput label="Youtube Channel" />
    <MDBIcon icon="check" />
  </MDBRow>
  <MDBRow around className="mt-2">
    <MDBIcon fab icon="facebook" size="5x" />
    <MDBInput label="Facebook Profile" />
    <MDBIcon icon="check" />
  </MDBRow>
  <MDBRow around className="mt-2">
    <MDBIcon fab icon="twitter" size="5x" />
    <MDBInput label="Twitter Handle" />
    <MDBIcon icon="check" />
  </MDBRow>
  <MDBBtn >Submit</MDBBtn>
  </form>
</MDBContainer>
);
};

export default FormPage;