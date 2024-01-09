import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Row,
} from 'react-bootstrap';

import {
  BuildingIcon,
  HeartIcon,
  LeafIcon,
  MapIcon,
  SelectionIcon,
  SendIcon,
  TaxiIcon,
  WaterSportIcon,
} from '../icons';
import './BookTrip.css';

const bookTripData = [
  {
    id: 1,
    title: 'Choose Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: <SelectionIcon />,
    color: '#F0BB1F',
  },
  {
    id: 2,
    title: 'Make Payment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: <WaterSportIcon />,
    color: '#F15A2B',
  },
  {
    id: 3,
    title: 'Reach Airport on Selected Date',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
    icon: <TaxiIcon />,
    color: '#006380',
  },
];

export const BookTrip = () => {
  // Trip to - Popover
  const popover = (
    <Popover id='popover-ongoing' className='rounded-4 border-0 shadow p-2'>
      <Popover.Body className='font-poppins'>
        <div className='d-flex gap-3'>
          <div>
            <Image
              src={`${process.env.PUBLIC_URL}/images/rome.png`}
              roundedCircle
              className='object-fit-cover'
              alt='City'
              width={45}
              height={45}
            />
          </div>
          <div className='flex-grow-1'>
            <span className='fw-medium'>Ongoing</span>
            <h5 className='text-black pt-1 pb-2'>Trip to rome</h5>
            <p className='mb-1 fw-medium text-black'>
              <span>40%</span> completed
            </p>
            <ProgressBar now={40} />
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <section id='book-a-trip'>
      <Container>
        <Row className='g-5'>
          {/* Left Column */}
          <Col lg={7} xl={6}>
            <h3 className='fw-semibold font-poppins'>Easy and Fast</h3>
            <h4 className='font-volkhov fw-bold text-capitalize'>
              Book your next trip in 3 easy steps
            </h4>
            <ListGroup variant='flush' className='mt-4'>
              {/* List Items */}
              {bookTripData &&
                bookTripData.map((trip) => (
                  <ListGroup.Item
                    key={trip.id}
                    className='d-flex justify-content-start gap-4 border-bottom-0 font-poppins'
                  >
                    <Row>
                      {/* Icons */}
                      <Col xs={1}>
                        <div
                          className='icon-box rounded-3 d-flex justify-content-center align-items-center'
                          style={{ backgroundColor: trip.color }}
                        >
                          {trip.icon}
                        </div>
                      </Col>
                      {/* Descriptions */}
                      <Col xs={11} className='ps-4'>
                        <h5 className='fw-semibold'>{trip.title}</h5>
                        <p>{trip.description}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          {/* Right Column */}
          <Col lg={5} xl={6} className='d-flex justify-content-center align-items-center'>
            <Card className='rounded-4 font-poppins py-3 px-4 border-0'>
              <Card.Img
                src={`${process.env.PUBLIC_URL}/images/greece.png`}
                className='w-100 object-fit-cover rounded-4'
                alt='Trip to'
                height={180}
              />
              <Card.Body>
                <Card.Title>Trip To Greece</Card.Title>
                <Card.Text className='fw-medium'>
                  14-29 June | by Robbin joseph
                </Card.Text>
                {/* Icons */}
                <div className='icons d-flex flex-row gap-3'>
                  <div className='d-flex justify-content-center align-items-center rounded-circle'>
                    <LeafIcon />
                  </div>
                  <div className='d-flex justify-content-center align-items-center rounded-circle'>
                    <MapIcon />
                  </div>
                  <div className='d-flex justify-content-center align-items-center rounded-circle'>
                    <SendIcon />
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className='border-0'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-2'>
                    <BuildingIcon />
                    <span className='fw-medium'>24 people going</span>
                  </div>
                  {/* Trip to - Popover */}
                  <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement='top'
                    overlay={popover}
                  >
                    <HeartIcon className='heart-icon' />
                  </OverlayTrigger>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
