import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './IntroInfluencers.css';

class IntroInfluencers extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('navbarCollapse')}
      />
    );
    return (
      <div id='classicformpage'>
        

        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBAnimation
                type='fadeInLeft'
                delay='.3s'
                className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
              >
                <h1 className='h1-responsive font-weight-bold'>
                  Sign up right now!
                </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                  Create your profile in seconds and get visibility from hundreds of partner brands. Finding collaborations has never been easier!
                </h6>
                <MDBBtn outline color='white'>
                  Learn More
                </MDBBtn>
              </MDBAnimation>

              <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='white-text text-left'>
                      <h3 className='text-center'>
                        <MDBIcon icon='user' /> Register:
                      </h3>
                      <hr className='hr-light' />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your name'
                        icon='user'
                      />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your email'
                        icon='envelope'
                      />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your password'
                        icon='lock'
                        type='password'
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo' onClick={() => {this.props.history.push('/form')}}>Sign Up</MDBBtn>
                        <hr className='hr-light' />
                        <div className='text-center d-flex justify-content-center white-label'>
                          <a href='#!' className='p-2 m-2'>
                            
                          </a>
                          <a href='#!' className='p-2 m-2'>
                            
                          </a>
                          <a href='#!' className='p-2 m-2'>

                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default withRouter(IntroInfluencers);