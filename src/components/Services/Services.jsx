import { Card, Col, Container, Row } from "react-bootstrap";

import {
  MicrophoneIcon,
  PlaneIcon,
  SatelitteIcon,
  SettingsIcon,
} from "../icons";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Calculated Weather ",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: <SatelitteIcon />,
  },
  {
    id: 2,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: <PlaneIcon />,
  },
  {
    id: 3,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    icon: <MicrophoneIcon />,
  },
  {
    id: 4,
    title: "Customization",
    description:
      "We deliver outsource aviation services for military customers",
    icon: <SettingsIcon />,
  },
];

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
          {servicesData &&
            servicesData.map((service) => (
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
