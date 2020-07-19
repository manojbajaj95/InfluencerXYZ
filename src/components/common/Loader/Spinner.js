import React from 'react';
import { MDBSpinner, MDBBox } from 'mdbreact';

const Spinner = () => {
  return (
    <MDBBox
      display="flex"
      style={{
        placeContent: 'center',
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MDBSpinner big />
    </MDBBox>
  );
};

export default Spinner;
