'use client';

export default function ReturnsPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 text-black">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Returns & Refunds Policy</h1>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
        <div>
          <p>
            Your satisfaction is our top priority, and we strive to ensure you’re completely happy with your purchase. If for any reason you are not satisfied with your clothing item, we offer a flexible and fair return and refund process. Our policy is designed to be straightforward, customer-centric, and transparent so that shopping with us remains stress-free. All eligible purchases made through our online store across Canada are covered under this policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Return Eligibility</h2>
          <p>
            You may return any item within <strong>14 days of delivery</strong> as long as the item is in brand new, unused condition. Returned items must include all original tags and labels, must not be worn or washed, and should be free from any signs of wear, stains, perfumes, or damage. Items returned in non-resalable condition may be rejected or incur a restocking fee of up to 20% at our discretion. Please note that the following items are <strong>non-returnable</strong>: undergarments, swimwear, items labeled “Final Sale,” complimentary promotional items, and customized or personalized orders. These exclusions are in place to maintain hygiene, safety, and uniqueness of tailored items.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">How to Start a Return</h2>
          <p>
            To begin a return, simply reach out to our support team through our{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-blue-800">contact page</a>. Please provide your order number, the item(s) you wish to return, the reason for your return, and any supporting photos if applicable. Our customer care representatives will review your request and, if approved, send you a return authorization along with detailed instructions and a return shipping label. Kindly refrain from sending items back without our prior confirmation. Unauthorized returns may be refused or significantly delayed, and we cannot guarantee refund processing for items returned without following the approved procedure.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Return Shipping</h2>
          <p>
            Customers are responsible for return shipping costs unless the item received is defective, damaged, or incorrect. In such cases, we will provide a prepaid return label at no additional cost to ensure a hassle-free experience. We strongly encourage using a trackable shipping method, and we recommend keeping a copy of your tracking number until the return is successfully processed. Items sent to the wrong address or without tracking may not be located or processed for refund. To avoid this, please follow the shipping instructions provided with your return authorization carefully. Returns shipped outside the provided window may also be denied or incur a late return fee.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Refunds</h2>
          <p>
            Once we receive your returned item and it passes our quality inspection, we’ll send a confirmation email regarding the status of your refund. Approved refunds will be processed promptly and issued to your original method of payment within 5–10 business days. Refunds will reflect the item’s purchase price excluding any original shipping charges unless the return is due to a fulfillment error on our part. Please note that depending on your financial institution, refund processing times may vary. Some banks or credit card companies may take longer to post the credit to your account. We recommend allowing at least one full billing cycle before reaching out if your refund has not yet appeared.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Exchanges</h2>
          <p>
            At this time, we do not offer direct item-for-item exchanges. If you'd like a different size, color, or style, please process your original item as a return and place a new order for your desired item. This ensures faster processing, reduces errors, and guarantees availability of the item you want. Our team is always available to assist you with reordering or checking the availability of products if needed. We're happy to help make your new selection a perfect fit!
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Damaged, Defective, or Incorrect Items</h2>
          <p>
            If you receive an item that is damaged, defective, or not what you ordered, please notify us within <strong>48 hours</strong> of delivery. Be sure to include photos of the issue along with your order number when you contact us. We’ll promptly review your case and offer a replacement, store credit, or full refund depending on the situation and your preference. Prompt reporting helps us improve quality control and resolve the issue quickly. Claims made after the 48-hour window may not qualify for compensation, so please inspect your items carefully upon receipt.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Late or Missing Refunds</h2>
          <p>
            If more than 10 business days have passed since you received your refund confirmation and the funds still haven’t appeared in your account, please first check with your bank or credit card provider. Sometimes there are delays in posting, especially around holidays or high-traffic periods. If there is still no record of the refund, reach out to us and we’ll assist in contacting the payment processor to resolve the issue. We understand how important timely refunds are and are committed to helping you get your money back as soon as possible.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Return Abuse</h2>
          <p>
            While we want to provide a generous and customer-friendly return policy, we also monitor return patterns to prevent abuse. Excessive or suspicious return activity may result in return privileges being restricted, delayed processing, or additional restocking fees. This ensures we maintain fairness for all customers and protect the sustainability of our business. We reserve the right to refuse returns that violate our policy or involve fraudulent behavior. Each case is handled individually, and we aim to make decisions that are respectful and well-informed.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Holiday & Promotional Period Returns</h2>
          <p>
            During peak seasons such as the holidays or major promotional sales, we may extend our return window to better serve our customers. For example, items purchased during December may be eligible for return until mid-January. These temporary extensions and any promotional exceptions will be clearly stated during checkout and in your confirmation email. Please refer to your order confirmation for specific return eligibility during these times or contact our support team if you're unsure about the applicable return period for your order.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p>
            We are here to assist you at every step of the return process. Whether you need help initiating a return, have questions about eligibility, or need to follow up on a refund, our team is ready to help. Please visit our{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-blue-800">contact page</a> to get in touch. We are committed to making your return experience smooth, fair, and transparent—just like our shopping experience.
          </p>
        </div>
      </section>
    </div>
  );
}