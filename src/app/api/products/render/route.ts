// src/app/api/products/render/route.ts
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import authOptions from '@/lib/authOptions';
import { Product } from '@prisma/client';

// Define the fetchProducts function
async function fetchProducts() {
  const session = await getServerSession(authOptions);
  const owner = session?.user?.email ?? '';

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const products = await prisma.product.findMany({
      where: { owner },
    });
    return products as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

// Export the fetchProducts function with GET method
export default async function GET() {
  const products = await fetchProducts();
  return NextResponse.json(products);
}
