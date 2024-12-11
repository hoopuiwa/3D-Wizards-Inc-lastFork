import { getServerSession } from 'next-auth';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Product } from '@prisma/client';
import CartCard from '@/components/CartCard';
import { prisma } from '@/lib/prisma';
import { useForm } from 'react-hook-form'; // For form handling
import { checkoutProducts } from '@/lib/dbActions'; // Import the new function

const CartPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const owner = session?.user!.email ? session.user.email : '';
  const product: Product[] = await prisma.product.findMany({
    where: {
      owner,
    },
    select: {
      id: true,
      option: true,
      size: true,
      color1: true,
      color2: true,
      color3: true,
      quantity: true,
      owner: true,
      checkedout: true, // Include the checkedout field
    },
  });

  // Form handling
  const { handleSubmit } = useForm();

  // Checkout function
  const onCheckout = async () => {
    try {
      await checkoutProducts(owner); // Update the 'checkedout' field in the database
      console.log('Checkout successful');
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h2 className="text-center">Cart</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {product.map((item) => (
                <Col key={item.id}>
                  <CartCard product={item as Product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            {/* Checkout Button */}
            <form onSubmit={handleSubmit(onCheckout)}>
              <Button type="submit" variant="success">
                Checkout
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CartPage;
