import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  Ratio,
  Row,
  Stack,
} from 'react-bootstrap';

import { PlayIcon } from '../icons';
import './Hero.css';

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id='hero'>
        <Container>
          <Row>
            {/* Left Column */}
            <Col
              lg={5} md={6}
              className='d-flex justify-content-start align-items-center'
            >
              <div>
                <h1 className='text-uppercase font-poppins fw-semibold'>
                  Best Destinations around the world
                </h1>
                <h2 className='font-volkhov fw-bold'>
                  Travel, <ins className='text-decoration-none'>enjoy</ins> and
                  live a new and full life
                </h2>
                <p className='font-poppins'>
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </p>
                <Stack direction='horizontal' gap={5}>
                  {/* Find out more - Button */}
                  <Button
                    variant='warning'
                    className='border-0 text-white font-open-sans shadow-sm px-3 py-2'
                  >
                    Find out more
                  </Button>
                  {/* Play Demo */}
                  <div
                    onClick={() => setShowModal(true)}
                    className='play-btn d-flex justify-content-start align-items-center gap-3'
                  >
                    <div className='rounded-circle d-flex justify-content-center align-items-center cursor-pointer'>
                      <PlayIcon width={12} height={12} />
                    </div>
                    Play Demo
                  </div>
                </Stack>
              </div>
            </Col>
            {/* Right Column */}
            <Col lg={7} md={6} className='d-flex justify-content-center justify-content-md-end align-items-center p-4 p-md-0'>
              <Image
                src={`${process.env.PUBLIC_URL}/images/hero.png`}
                fluid
                alt='Hero Image'
                width={580}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Play Demo - Modal */}
      <Modal
        size='lg'
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Body>
          <Ratio aspectRatio='16x9'>
            <video controls='controls' autoPlay>
              <source
                src={`${process.env.PUBLIC_URL}/images/video.mp4`}
                type='video/mp4'
              />
            </video>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}
