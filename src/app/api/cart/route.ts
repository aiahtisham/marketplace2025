import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Retrieve the cart data from the query parameters
  const url = new URL(request.url);
  const cartItems = url.searchParams.get('cartItems');
  const totalPrice = url.searchParams.get('totalPrice');

  // Return the cart data as JSON response
  return NextResponse.json({
    cartItems: cartItems ? JSON.parse(decodeURIComponent(cartItems)) : [],
    totalPrice: totalPrice ? parseFloat(totalPrice) : 0,
  });
}
