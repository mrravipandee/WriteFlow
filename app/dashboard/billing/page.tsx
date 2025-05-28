'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const plans = [
  {
    name: 'Free',
    price: 'Rs. 0',
    period: '/month',
    features: [
      '10,000 Words/Month',
      '50+ Content Templates',
      'Unlimited Download & Copy',
      '1 Month of History',
    ],
    isActive: true,
  },
  {
    name: 'Monthly',
    price: 'Rs. 299',
    period: '/month',
    features: [
      '1,00,000 Words/Month',
      '50+ Content Templates',
      'Unlimited Download & Copy',
      '1 Year of History',
    ],
    isActive: false,
  },
];

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const Subscription = async () => {
    setLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Razorpay SDK failed to load');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/api/create-subscription');
      OnPayment(res.data.id);
    } catch (error: any) {
      console.error("Subscription API error:", error);
      setLoading(false);
    }
  };

  const OnPayment = async (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      subscription_id: subId,
      name: 'WriteFlow AI',
      description: 'Monthly Subscription Plan',
      handler: async (response: any) => {
        console.log("Payment success:", response);
        if (response?.razorpay_payment_id) {
          await SaveSubscription(response.razorpay_payment_id);
        }
        setLoading(false);
      },
      modal: {
        ondismiss: () => setLoading(false),
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress || 'unknown@writeflow.ai',
        userName: user?.fullName || 'Anonymous',
        active: true,
        paymentId,
        joinDate: moment().format('DD/MM/YYYY'),
      });

      console.log("DB Saved:", result);
      if (result) window.location.reload();
    } catch (err) {
      console.error("DB Insert Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upgrade with Monthly Plan</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 w-full md:w-[300px] transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-700 text-lg mb-4">
                <span className="font-bold text-purple-600">{plan.price}</span>
                {plan.period}
              </p>

              <ul className="space-y-2 text-sm text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-600 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className={`w-full mt-6 ${plan.isActive
                  ? 'bg-gray-600 text-white cursor-default'
                  : 'hover:bg-purple-600 hover:text-white text-purple-600'
                  }`}
                disabled={plan.isActive || loading}
                onClick={!plan.isActive ? Subscription : undefined}
              >
                {plan.isActive ? (
                  'Current Plan'
                ) : loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Loading...
                  </span>
                ) : (
                  'Upgrade Plan'
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
