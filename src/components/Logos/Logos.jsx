import { Col, Image, Row } from "react-bootstrap";

import "./Logos.css";
import { LOGOS } from "../../data";

export const Logos = () => {
  return (
    <section id='logos' className='py-5'>
      <Row className='gap-2 gap-sm-5'>
        {LOGOS &&
          LOGOS.map((logo) => (
            <Col
              key={logo.id}
              className='d-flex justify-content-center align-items-center rounded-4 py-3 px-4'
            >
              <Image
                src={`${process.env.PUBLIC_URL}/${logo.logo}`}
                className='object-fit-cover'
                alt={logo.name || "Logo"}
                fluid
              />
            </Col>
          ))}
      </Row>
    </section>
  );
};
