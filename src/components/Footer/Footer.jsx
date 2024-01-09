import {
  Col,
  Container,
  Image,
  ListGroup,
  Row,
  Stack,
} from 'react-bootstrap';

import { FacebookIcon, InstagramIcon, TwitterIcon } from '../icons';
import './Footer.css';

const footerData = [
  {
    id: 1,
    name: 'Company',
    children: [
      {
        id: 11,
        name: 'About',
        link: '#',
      },
      {
        id: 12,
        name: 'Careers',
        link: '#',
      },
      {
        id: 13,
        name: 'Mobile',
        link: '#',
      },
    ],
  },
  {
    id: 2,
    name: 'Contact',
    children: [
      {
        id: 21,
        name: 'Help/FAQ',
        link: '#',
      },
      {
        id: 22,
        name: 'Press',
        link: '#',
      },
      {
        id: 23,
        name: 'Affilates',
        link: '#',
      },
    ],
  },
  {
    id: 3,
    name: 'More',
    children: [
      {
        id: 31,
        name: 'Airlinefees',
        link: '#',
      },
      {
        id: 32,
        name: 'Airline',
        link: '#',
      },
      {
        id: 33,
        name: 'Low fare tips',
        link: '#',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='py-3 g-3' lg={5} md={4} sm={3} xs={2}>
          <Col>
            <h2>Jadoo.</h2>
            <small className='fw-medium'>
              Book your trip in minute, get full Control for much longer.
            </small>
          </Col>

          {footerData &&
            footerData.map((item) => (
              <Col key={item.id}>
                {/* Footer List Titles */}
                <strong className='footer-title text-dark mb-0 mb-sm-3'>{item.name}</strong>
                <ListGroup variant='flush'>
                  {/* Footer List Items */}
                  {item.children.map((child) => (
                    <ListGroup.Item
                      key={child.id}
                      action
                      href={child.link}
                      className='border-bottom-0 p-0 my-1 fw-medium'
                    >
                      {child.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            ))}

          <Col>
            {/* Social Icons */}
            <div className='social-icon d-flex flex-row gap-4'>
              <div className='rounded-circle border-0 d-flex justify-content-center align-items-center'>
                <FacebookIcon />
              </div>
              <div className='rounded-circle border-0 d-flex justify-content-center align-items-center'>
                <InstagramIcon />
              </div>
              <div className='rounded-circle border-0 d-flex justify-content-center align-items-center'>
                <TwitterIcon />
              </div>
            </div>
            {/* Apps */}
            <p className='my-3'>Discover our app</p>
            <Stack direction='horizontal' gap={2}>
              <Image
                src={`${process.env.PUBLIC_URL}/images/google-play.svg`}
                className='object-fit-cover'
                alt='Google Play'
              />
              <Image
                src={`${process.env.PUBLIC_URL}/images/play-store.svg`}
                className='object-fit-cover'
                alt='Play Store'
              />
            </Stack>
          </Col>
        </Row>

        <Row className='text-center py-5'>
          <small className='fw-medium'>All rights reserved@jadoo.co</small>
        </Row>
      </Container>
    </footer>
  );
}
