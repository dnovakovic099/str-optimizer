import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Only use the secret key in the backend
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16', // Using a specific API version for stability
});

export async function POST(request) {
  try {
    console.log('API route called');
    const body = await request.json();
    console.log('Request body:', body);
    const { email, selectedPrice } = body;

    // Validate inputs
    if (!email || typeof email !== 'string') {
      console.log('Invalid email:', email);
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    if (!selectedPrice || !['earlybird', 'regular'].includes(selectedPrice)) {
      console.log('Invalid price selection:', selectedPrice);
      return NextResponse.json(
        { error: 'Valid price selection is required' },
        { status: 400 }
      );
    }

    console.log('Creating Stripe session...');
    // Get the base URL from environment or construct it from request
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3007';

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'STR Revenue Accelerator',
              description: selectedPrice === 'earlybird' ? 'Early Bird Special - Save $200!' : 'Regular Price',
            },
            unit_amount: selectedPrice === 'earlybird' ? 29700 : 49700, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}`,
      metadata: {
        email: email,
        package: selectedPrice === 'earlybird' ? 'Early Bird' : 'Regular',
      },
    });
    console.log('Stripe session created:', session.id);

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      param: error.param,
    });
    return NextResponse.json(
      { 
        error: error.message || 'Error creating checkout session'
      },
      { status: error.statusCode || 500 }
    );
  }
} 