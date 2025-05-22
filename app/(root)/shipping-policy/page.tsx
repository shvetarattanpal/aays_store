'use client';

export default function ShippingPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 text-black">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Shipping Policy</h1>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
        <div>
          <p>
            We’re proud to offer fast, reliable, and transparent shipping across Canada to make your shopping experience as smooth as possible. Whether you're ordering seasonal styles or wardrobe essentials, each package is handled with care and attention. Our logistics team is committed to getting your items to your doorstep quickly and safely. Below is a detailed breakdown of our shipping zones, processing times, estimated delivery windows, and the carriers we partner with.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Shipping Zones</h2>
          <p>
            At this time, we ship exclusively within Canada. Our service covers all ten provinces and three territories, including major cities and rural areas. Whether you’re located in Ontario, British Columbia, Alberta, Quebec, or remote parts of the Yukon, we’ll ensure your package is delivered promptly. We are continuously working on expanding our shipping capabilities and hope to offer international shipping in the near future. We appreciate your patience and support as we grow.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Processing Time</h2>
          <p>
            Orders are processed Monday through Friday, excluding public holidays. Once an order is placed, it generally takes 1–3 business days to pick, pack, and prepare your order for shipment. If there is any delay due to stock issues or system updates, our team will contact you promptly. You will receive an email notification with tracking details once your order is dispatched from our facility.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Delivery Time</h2>
          <p>
            Delivery time depends on your location and the shipping method selected at checkout. Standard shipping takes 3–7 business days, while expedited shipping options can deliver in as few as 1–3 business days. Please note that remote or northern regions may require additional time. Although we strive to meet these delivery estimates, actual delivery dates may vary due to carrier delays, severe weather, or high order volumes during sales or holidays.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Shipping Carriers</h2>
          <p>
            We’ve partnered with trusted carriers such as Canada Post, Purolator, and FedEx to offer reliable shipping across Canada. The carrier selected for your order depends on several factors, including your shipping address, order size, weight, and shipping preference. All packages come with tracking so you can monitor your shipment from our warehouse to your doorstep in real-time. If you'd like to request a specific carrier, please reach out before placing your order and we’ll do our best to accommodate.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Shipping Fees</h2>
          <p>
            Shipping costs are calculated at checkout based on your location, package weight, and chosen delivery method. Occasionally, we offer free shipping promotions—these will be advertised on the homepage or automatically applied when your order qualifies. Please note that free shipping, when available, may apply only to standard shipping and not to expedited or express options. Shipping fees are non-refundable once an order has been shipped unless the product is defective or an error occurred on our part.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Address Accuracy</h2>
          <p>
            It is important to provide accurate and complete shipping details at checkout. Please double-check your address, postal code, and contact information before submitting your order. Orders that are delayed or lost due to incorrect addresses are not eligible for free replacement or refund. If you realize an error in your address after placing an order, contact us as soon as possible. If the order has not shipped yet, we may be able to update the address before dispatch.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Order Tracking</h2>
          <p>
            Once your order is shipped, you will receive an email notification containing a tracking number and a link to track your shipment. You can follow the progress of your delivery directly on the carrier’s website. Please allow up to 24 hours for tracking information to become active. If you do not receive a tracking email within 3 business days, check your spam or promotions folder. If you still can’t find it, please reach out to our support team and we’ll be happy to assist.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Lost or Delayed Packages</h2>
          <p>
            In rare cases where a shipment is significantly delayed or lost, we will assist you in filing a claim with the carrier. While we are not liable for delays caused by third-party couriers, we will do our best to resolve the issue promptly. If your package shows as delivered but you haven’t received it, please check with neighbors, building staff, or your local post office. If the package remains missing, contact us within 5 business days of the marked delivery date.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p>
            Our goal is to make your shopping experience as smooth and reliable as possible. If you have any questions or concerns related to your delivery, please reach out to our customer service team through our{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-blue-800">contact page</a>. We’re happy to help with order status updates, address changes, or any special shipping requests.
          </p>
        </div>
      </section>
    </div>
  );
}