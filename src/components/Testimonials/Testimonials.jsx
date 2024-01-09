import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Mike Taylor',
    text: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    location: 'Lahore, Pakistan',
    image: 'images/person1.jpg',
  },
  {
    id: 2,
    name: 'Chris Thomas',
    text: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    location: 'CEO of Red Button',
    image: 'images/person2.jpg',
  },
  {
    id: 3,
    name: 'Isabella Rossi',
    text: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    location: 'Rome, Italy',
    image: 'images/person3.jpg',
  },
];

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <h3 className='fw-semibold text-uppercase font-poppins'>
              Testimonials
            </h3>
            <h4 className='font-volkhov fw-bold text-capitalize'>
              What people say about Us.
            </h4>
          </Col>
          <Col className='position-relative'>
            <Carousel fade className='w-100'>
              {testimonialsData &&
                testimonialsData.map((testimonial) => (
                  <Carousel.Item key={testimonial.id} className='h-100'>
                    <Image
                      roundedCircle
                      src={`${process.env.PUBLIC_URL}/${testimonial.image}`}
                      className='object-fit-cover bg-white'
                      alt='Profile'
                      width={60}
                      height={60}
                    />
                    <Carousel.Caption className='position-absolute text-start p-0'>
                      <q>{testimonial.text}</q>
                      <p className='fw-medium mb-0 mt-3'>{testimonial.name}</p>
                      <span>{testimonial.location}</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
            <div className='bottom-div'></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
