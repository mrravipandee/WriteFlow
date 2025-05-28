// app/api/create-subscription/route.js

import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_PLAN_ID } = process.env;

    // Step 1: Check for missing environment variables
    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET || !RAZORPAY_PLAN_ID) {
      return NextResponse.json(
        { error: "Missing Razorpay environment variables" },
        { status: 500 }
      );
    }

    // Step 2: Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });

    // Step 3: Attempt to create subscription
    const subscription = await razorpay.subscriptions.create({
      plan_id: RAZORPAY_PLAN_ID,
      total_count: 1,
      customer_notify: 1,
      notes: {
        developer: "Ravi Pandey",
      },
    });

    return NextResponse.json(subscription);
  } catch (err) {
    console.error("❌ Razorpay API Error:");
    console.error(err); // Log entire error object

    // If Razorpay returns a structured error
    if (err?.error) {
      return NextResponse.json({ error: err.error.description || "Razorpay API error" }, { status: 500 });
    }

    // Fallback error
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
