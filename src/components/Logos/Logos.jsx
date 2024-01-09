import { Col, Image, Row } from 'react-bootstrap';

import './Logos.css';

const logosData = [
  {
    id: 1,
    name: 'Axon Airlanes',
    logo: 'images/logos/axon.png',
  },
  {
    id: 2,
    name: 'Jetstar',
    logo: 'images/logos/jetstar.png',
  },
  {
    id: 3,
    name: 'Expedia',
    logo: 'images/logos/expedia.png',
  },
  {
    id: 4,
    name: 'Qantas',
    logo: 'images/logos/qantas.png',
  },
  {
    id: 5,
    name: 'Alitalia',
    logo: 'images/logos/alitalia.png',
  },
];

export const Logos = () => {
  return (
    <section id='logos' className='py-5'>
      <Row className='gap-2 gap-sm-5'>
        {logosData &&
          logosData.map((logo) => (
            <Col key={logo.id} className='d-flex justify-content-center align-items-center rounded-4 py-3 px-4'>
              <Image
                src={`${process.env.PUBLIC_URL}/${logo.logo}`}
                className='object-fit-cover'
                alt={logo.name || 'Logo'}
                fluid
              />
            </Col>
          ))}
      </Row>
    </section>
  );
}
