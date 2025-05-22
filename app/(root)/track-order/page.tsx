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
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Order not found');
      }

      setOrderDetails(data.orderDetails);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const renderStatusStep = (label: string, timestamp?: string) => (
    <div className="flex items-center space-x-2">
      <div className={`w-4 h-4 rounded-full ${timestamp ? 'bg-green-500' : 'bg-gray-300'}`} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-xs text-gray-500">
          {timestamp ? new Date(timestamp).toLocaleString() : 'Pending'}
        </p>
      </div>
    </div>
  );

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

          <div className="space-y-4">
            {renderStatusStep('Ordered', orderDetails.statusTimestamps?.ordered)}
            {renderStatusStep('Shipped', orderDetails.statusTimestamps?.shipped)}
            {renderStatusStep('Out for Delivery', orderDetails.statusTimestamps?.outForDelivery)}
            {renderStatusStep('Delivered', orderDetails.statusTimestamps?.delivered)}
          </div>
        </div>
      )}
    </div>
  );
}

export const dynamic = "force-dynamic";