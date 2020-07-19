import React from 'react';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';

const TestimonialsPage = () => {
  return (
    <MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h1-responsive font-weight-bold my-5'>Testimonials</h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className='no-flex'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                 
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> Insightful data tracking methods. Real time tracking is a game changer. Highly recommend the platform to all brands out there!
                </p>
                <h4 className='font-weight-bold'>Anurag Dani</h4>
                <h6 className='font-weight-bold my-3'>Co-Founder, AroLeap</h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon far icon='star-half' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                  
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> User friendly interface, just create a profile and instantly start getting matches for collaborations. Moreover, all brand management will be done by these folks and you can focus on content creation!
                </p>
                <h4 className='font-weight-bold'>Satyanarayan</h4>
                <h6 className='font-weight-bold my-3'>
                  Founder, Foodle
                </h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                  
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> Helped us kickstart our influencer campaigns with ease. Fit our budget and delivered our targets. Strongly recommend it to brands to improve their digital presence.
                </p>
                <h4 className='font-weight-bold'>Manoj Bajaj</h4>
                <h6 className='font-weight-bold my-3'>
                  Co-Founder, Poqet
                </h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon far icon='star' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default TestimonialsPage;