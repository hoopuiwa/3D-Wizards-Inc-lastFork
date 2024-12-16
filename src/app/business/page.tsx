import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BusinessPage = async () => (
  <main>
    <Container id="about-us" fluid className="py-3">
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Business Inquiries</h3>
          <p>
            If your business requires regularly produced 3D printed products,
            you may be in luck. We already have several clients that can vouch
            for our reliability and the quality of our product.
            A benefit of working with a local 3D printing service is that oversea
            shipping times and costs arent a factor to overcome, simply wait for us to
            drive over from Ewa at a schedule of your preference. Please reach out at
            the following email if you’d like more information includin,
            but not limited to, our wholesale prices.
          </p>
          <p>
            3dwizardsinc@gmail.com
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default BusinessPage;
