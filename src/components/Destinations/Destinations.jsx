import { Card, Col, Container, Row } from 'react-bootstrap';

import { NavigationIcon } from '../icons';
import './Destinations.css';
import { DESTINATIONS } from '../../data';

export const Destinations = () => {
  return (
    <section
      id='destinations'
      className='d-flex justify-content-center flex-column'
    >
      <h3 className='text-uppercase fw-semibold font-poppins'>Top Selling</h3>
      <h4 className='font-volkhov fw-bold'>Top Destinations</h4>
      <Container className='my-sm-5 my-0'>
        <Row xs={1} sm={2} lg={3} className='d-flex justify-content-center'>
          {DESTINATIONS &&
            DESTINATIONS.map((destination, index) => (
              <Col key={destination.id} className='g-5 d-flex justify-content-center'>
                <Card
                  className={`rounded-4 border-0 ${
                    index === DESTINATIONS.length - 1 ? 'last-card' : ''
                  }`}
                >
                  <div className='card-img overflow-hidden'>
                    <Card.Img
                      variant='top'
                      src={`${process.env.PUBLIC_URL}/${destination.image}`}
                      alt={destination.name}
                      className='object-fit-cover'
                    />
                  </div>
                  <Card.Body className='font-poppins'>
                    <Card.Title className='d-flex justify-content-between align-items-center mb-3'>
                      <span>{destination.name}</span>
                      <span>{destination.price}</span>
                    </Card.Title>
                    <Card.Text>
                      <NavigationIcon height={18} />
                      <span className='ps-3 fw-medium'>{destination.description}</span>
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
