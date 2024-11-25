'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

/* Product data maybe tie to db later */
type Product = {
  id: number;
  name: string;
  type: string;
  dragon?: boolean;
  animal?: boolean;
  egg?: boolean;
  person?: boolean;
  primaryColor: string[];
  secondaryColor?: string[];
  thirdColor?: string[];
  price?: string;
  basePrice?: string;
  image: string;
  size: { min: number, max: number };
  pickupInperson?: boolean;
};

const products: Product[] = [
  {
    id: 8,
    name: 'Ferret',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: [], // Array of color names
    thirdColor: [],
    price: '$30',
    image: '',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
];

const FerretPage = () => {
  <Col md={9}>
    <Row>
      <Col className="d-flex justify-content-between align-items-center mb-3">
        <h4>Items</h4>
      </Col>
    </Row>
    <Row>
      {/* Each "Product" info image, name, cost, etc */}
      {displayedProducts.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.type}</Card.Text>
              {/* for testing remove before product */}
              <Card.Text>
                {product.primaryColor}
                ,PrimaryList
              </Card.Text>
              <Card.Text>
                {product.secondaryColor}
                ,SecondaryList
              </Card.Text>
              <Card.Text>
                {product.thirdColor}
                ,ThirdList
              </Card.Text>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Col>
};

export default FerretPage;
