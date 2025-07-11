import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { OrderType } from "@/lib/types";
import { OrderItemType } from "@/lib/types";

const Orders = async () => {
  const { userId } = auth();
  let orders = await getOrders(userId as string);

  console.log("Orders Data:", orders);
  console.log("Orders Type:", typeof orders);
  console.log("Is Orders an Array?", Array.isArray(orders));

  orders = Array.isArray(orders) ? orders : [];

  if (orders.length === 0) {
    console.warn("No orders found for user:", userId);
    return <p>No orders available.</p>;
  }

  console.log("Processed Orders:", orders);

  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10">Your Orders</p>

      {orders.length === 0 && (
        <p className="text-body-bold my-5">You have no orders yet.</p>
      )}

      <div className="flex flex-col gap-10">
        {orders.map((order: OrderType) => (
          <div
            key={order._id}
            className="flex flex-col gap-8 p-4 hover:bg-grey-1"
          >
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold">Order ID: {order._id}</p>
              <p className="text-base-bold">
                Total Amount: ${order.totalAmount}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {Array.isArray(order.products) &&
                order.products.map((orderItem: OrderItemType, index) => {
                  const product = orderItem.product;
                  const imageSrc =
                    product &&
                    Array.isArray(product.media) &&
                    product.media.length > 0
                      ? product.media[0]
                      : "/placeholder.png";

                  return (
                    <div key={index} className="flex gap-4">
                      <Image
                        src={imageSrc}
                        alt={product?.title || "Product image"}
                        width={100}
                        height={100}
                        className="w-32 h-32 object-cover rounded-lg"
                      />

                      <div className="flex flex-col justify-between">
                        <p className="text-small-medium">
                          Title:{" "}
                          <span className="text-small-bold">
                            {product?.title || "Unknown Product"}
                          </span>
                        </p>

                        {orderItem.color && (
                          <p className="text-small-medium">
                            Color:{" "}
                            <span className="text-small-bold">
                              {orderItem.color}
                            </span>
                          </p>
                        )}

                        {orderItem.size && (
                          <p className="text-small-medium">
                            Size:{" "}
                            <span className="text-small-bold">
                              {orderItem.size}
                            </span>
                          </p>
                        )}

                        <p className="text-small-medium">
                          Unit price:{" "}
                          <span className="text-small-bold">
                            {product?.price !== undefined
                              ? `$${product.price}`
                              : "N/A"}
                          </span>
                        </p>

                        <p className="text-small-medium">
                          Quantity:{" "}
                          <span className="text-small-bold">
                            {orderItem.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";