import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
//import { prisma } from '@/lib/prisma';
//import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import {Product} from '@/lib/validationSchemas';
import CartCard from '@/components/CartCard';
import { prisma } from '@/lib/prisma';



/** Render a list of stuff for the logged in user. */
const CartPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  /*const owner = (session && session.user && session.user.email) || '';
  const stuff = await prisma.stuff.findMany({
    where: {
      owner,
    },
  });*/
  // console.log(stuff);
  const owner = session?.user!.email ? session.user.email : '';
  const product: Product[] = await prisma.product.findMany ({
    where: {
      owner
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
    },
  }) as Product[];
  return (
    <main>
      <Container id="list" fluid className="py-3">
      <Row>
        <Col>
        <h2 className='text-center'>Cart</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {product.map((product) => (
            <Col key={product.option}>
              <CartCard product={product} />
            </Col>
          ))}
        </Row>
        </Col>
        </Row>
      </Container>
      </main>
  );
};

export default CartPage;
