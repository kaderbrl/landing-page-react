import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './Testimonials.css';
import { TESTIMONIALS } from '../../data';

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
              {TESTIMONIALS &&
                TESTIMONIALS.map((testimonial) => (
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
