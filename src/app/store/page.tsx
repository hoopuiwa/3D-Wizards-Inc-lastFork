'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

/* Product data maybe tie to db later */
const products = [
  {
    id: 1,
    name: 'Crystal Dragon',
    type: 'Dragon',
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 2,
    name: 'Mech dragon',
    type: 'Dragon',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  // add adjustable price later
  {
    id: 3,
    name: 'Baby dragon',
    type: 'Dragon',
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    basePrice: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    egg: false,
  },
  {
    id: 4,
    name: 'Frog',
    type: 'Animal',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 5,
    name: 'Axolotl',
    type: 'Animal',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 6,
    name: 'Gecko',
    type: 'Animal',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 7,
    name: 'Rat',
    type: 'Animal',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 8,
    name: 'Ferret',
    type: 'Animal',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$30',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Imperial Dragon',
    type: 'Dragon',
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Knight',
    type: 'Person',
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Samurai',
    type: 'Person',
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
];

const StorePage = () => {
  const [pickupInperson, setPickupInperson] = useState(false);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  /* allows for multiple filters */
  const displayedProducts = products.filter((product) => {
    const saleFilter = showSaleOnly ? product.sale : true;
    const pickupFilter = pickupInperson ? product.pickupInperson : true;
    // added a basic search filter, filters by product name
    const searchFilter = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return saleFilter && pickupFilter && searchFilter;
  });

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          <h4>Pick Up Inperson</h4>
          {/* Hidden product a can be picked up inperson used to show either switch or check could be used */}
          <Form.Check
            type="switch"
            id="pickup-today-switch"
            label=""
            checked={pickupInperson}
            onChange={() => setPickupInperson(!pickupInperson)}
          />
          {/* Does nothing */}
          <h5 className="mt-4">Categories</h5>
          <ul className="list-unstyled">
            {/* Link to the nested folder */}
            <Link href="/store/best" passHref>
              <Button variant="link">Best Sellers</Button>
            </Link>
            {/* Examples of other catigories */}
            <li>Color</li>
            <li>Size</li>
            <li>Animal</li>
            <li>etc</li>
          </ul>
          <h5 className="mt-4">Sale & Offers</h5>
          {/* non working button */}
          <Form.Check label="Extra 25% off select styles" />
          <Form.Check label="See Price in Bag" />
          {/* Only working button */}
          <Form.Check
            label="Show Sale Items Only"
            checked={showSaleOnly}
            onChange={() => setShowSaleOnly(!showSaleOnly)}
          />
          {/* Search bar doesn't work */}
          <h5 className="mt-4">Search</h5>
          <form>
            <div className="input-group">
              <input
              // Updated the search function to have basic function, not that good but its a start
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                value={searchTerm}
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-dark" type="submit">Search</button>
            </div>
          </form>
        </Col>

        {/* Product Grid */}
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
              <h4>Shop Your Store (xyz)</h4>
              <div>
                {/* Does nothing left over from the ai formating can be used later if wanted */}
                <Button variant="link">Hide Filters</Button>
                <Button variant="link">Sort By</Button>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Each "Product" info image, name, cost, etc */}
            {displayedProducts.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    {product.bestSeller && (
                      <Card.Text className="text-danger">Best Seller</Card.Text>
                    )}
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.type}</Card.Text>
                    <Card.Text>
                      {product.primaryColor}
                      Primary
                    </Card.Text>
                    <Card.Text>
                      {product.secondaryColor}
                      Secondary
                    </Card.Text>
                    <Card.Text>
                      {product.thirdColor}
                      Third
                    </Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    {product.sale && (
                      <Card.Text className="text-danger">Sale</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default StorePage;
