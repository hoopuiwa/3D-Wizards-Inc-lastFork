'use client';

import { Container, Col, Row, Card } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    { id: 1, url: '/images/Gall_1.jpg' },
    { id: 2, url: '/images/Gall_2.jpg' },
    { id: 3, url: '/images/Gall_3.jpg' },
    { id: 4, url: '/images/Gall_4.jpg' },
    { id: 5, url: '/images/Gall_5.jpg' },
    { id: 6, url: '/images/Gall_5.jpg' },
    { id: 7, url: '/images/Gall_7.jpg' },
    { id: 8, url: '/images/Gall_8.jpg' },
    { id: 9, url: '/images/Gall_9.jpg' },
    { id: 10, url: '/images/Gall_10.jpg' },
    { id: 11, url: '/images/Gall_11.jpg' },
    { id: 12, url: '/images/Gall_12.jpg' },
  ];

  return (
    <main>
      <Container>
        <Row className="p-4 align-middle text-center">
          <Col>
            <h1 className="mb-3">Gallery</h1>
            <h5 className="mb-5">
              We attend over 50 events per month and have a lot of fun doing so.
              We also regularly work on complicated custom orders. Check out what we’ve been up to
            </h5>
          </Col>
        </Row>
        <Row xs={2} md={3} lg={4} className="g-4">
          {images.map((image) => (
            <Col key={image.id}>
              <Card>
                <Card.Img variant="top" src={image.url} alt={`Gallery image ${image.id}`} className="rounded-2" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Gallery;
