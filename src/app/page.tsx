'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Slideshow from '../components/Slideshow';

/** The Home page. */
const Home = () => {
  const images = [
    '/images/Slide_1.JPG',
    '/images/Slide_2.JPG',
    '/images/Slide_3.JPG', // Add your images here
  ];
  return (
    <main>
      <Container id="landing-page" fluid className="py-3">
        <Row className="align-middle text-center">
          <Col xs={12}>
            <Slideshow images={images} interval={7000} />

          </Col>
        </Row>
        <Row className="align-middle text-center">
          <Col xs={4}>
            <h1>Catchy Headline and information!</h1>
          </Col>

          <Col xs={4}>
            <h1>Other Catchy Headline and information!</h1>
          </Col>

          <Col xs={4}>
            <h1> 3rd Catchy Headline and information!!!</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
