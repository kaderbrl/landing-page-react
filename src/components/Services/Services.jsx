import { Card, Col, Container, Row } from "react-bootstrap";

import "./Services.css";
import { SERVICES } from "../../data";

export const Services = () => {
  return (
    <section
      id='services'
      className='d-flex justify-content-center flex-column'
    >
      <div className='header w-100 text-center'>
        <h3 className='text-uppercase fw-semibold font-poppins'>Category</h3>
        <h4 className='font-volkhov fw-bold'>We Offer Best Services</h4>
      </div>

      <Container className='my-sm-5 my-0'>
        <Row md={2} lg={4} className='gx-sm-5 gx-2'>
          {SERVICES &&
            SERVICES.map((service) => (
              <Col key={service.id}>
                <Card className='rounded-5 border-0 py-4'>
                  <div className='services-icon d-flex justify-content-center'>
                    {service.icon}
                  </div>
                  <Card.Body className='text-center'>
                    <Card.Title className='font-open-sans'>
                      {service.title}
                    </Card.Title>
                    <Card.Text className='font-poppins px-3'>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}
