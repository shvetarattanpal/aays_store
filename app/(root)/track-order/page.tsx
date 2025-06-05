'use client';

import { useState } from 'react';

interface OrderStatusTimestamps {
  ordered?: string;
  shipped?: string;
  outForDelivery?: string;
  delivered?: string;
}

interface OrderDetails {
  orderId: string;
  email: string;
  status: string;
  statusTimestamps: OrderStatusTimestamps;
  createdAt: string;
}

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchOrder = async () => {
    setLoading(true);
    setError('');
    setOrderDetails(null);

    try {
      const cleanedId = orderId.trim().replace(/^Order ID:\s*/, '');

      const res = await fetch(`/api/orders/${cleanedId}`);

      let data: any;
      try {
        data = await res.json();
      } catch (jsonErr) {
        throw new Error('Invalid server response. Please try again.');
      }

      if (!res.ok) {
        throw new Error(data?.message || 'Order not found');
      }

      setOrderDetails(data.orderDetails);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = ['ordered', 'shipped', 'outForDelivery', 'delivered'];

  const getCurrentStepIndex = () => {
    return statusSteps.findIndex((step) => step === orderDetails?.status);
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 text-black">
      <h1 className="text-3xl font-bold text-center mb-6">Track Your Order</h1>

      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Enter Order ID"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <button
        onClick={fetchOrder}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        disabled={!orderId || loading}
      >
        {loading ? 'Tracking...' : 'Track Order'}
      </button>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {orderDetails && (
        <div className="mt-8 border rounded-lg p-4 bg-white shadow-sm">
          <p className="text-lg font-semibold mb-2">Order ID: {orderDetails.orderId}</p>
          <p className="text-sm mb-4">Email: {orderDetails.email}</p>

          <div className="flex justify-between items-center mt-6">
            {statusSteps.map((step, index) => {
              const currentIndex = getCurrentStepIndex();
              const timestamp = orderDetails.statusTimestamps?.[step as keyof OrderStatusTimestamps];
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;

              return (
                <div key={step} className="flex flex-col items-center w-full relative">
                  {index !== 0 && (
                    <div
                      className={`absolute top-2 left-0 w-full h-1 ${
                        isCompleted || isCurrent ? 'bg-green-500' : 'bg-gray-300'
                      } z-0`}
                    ></div>
                  )}

                  <div className={`z-10 w-6 h-6 rounded-full flex items-center justify-center 
                    ${isCompleted ? 'bg-green-500 text-white' : isCurrent ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {isCompleted ? '✓' : isCurrent ? '⏳' : ''}
                  </div>

                  <p className="text-xs mt-2 text-center">
                    {step === 'outForDelivery' ? 'Out for Delivery' : step.charAt(0).toUpperCase() + step.slice(1)}
                  </p>

                  <p className="text-[10px] text-gray-500 mt-1">
                    {timestamp ? new Date(timestamp).toLocaleString() : 'Pending'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export const dynamic = "force-dynamic";