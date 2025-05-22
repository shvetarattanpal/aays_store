'use client';

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 text-black">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
        <div>
          <p>
            Welcome to our online clothing store, your go-to destination for fashionable apparel for men and women across Canada. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you acknowledge that you have read, understood, and agree to comply with these terms. If you do not agree with any part of these terms, you must refrain from using our services. Our store operates in accordance with Canadian business practices and legal standards. We encourage all users to review these terms regularly, as they may be updated from time to time without prior notice.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Products & Availability</h2>
          <p>
            Our product catalog includes a wide range of clothing items curated for style, quality, and seasonal trends. While we strive to keep all product information accurate and up to date, we do not guarantee the availability of any item. All items are subject to availability and may be limited in stock or discontinued at any time. In the event a product is unavailable after an order is placed, we will notify you and provide a full refund or suggest an alternative option where possible.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Pricing & Payment</h2>
          <p>
            All prices listed on our website are in Canadian Dollars (CAD) and include applicable sales tax unless otherwise stated. We accept payments via major credit cards and other secure payment providers listed at checkout. Prices are subject to change without notice, and we reserve the right to correct pricing errors that may occur. Your order will only be processed after your payment is successfully authorized and confirmed.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Shipping & Delivery</h2>
          <p>
            We currently offer shipping services across Canada. Shipping times and costs are calculated based on your location and selected shipping method. While we make every effort to meet delivery estimates, we are not responsible for delays caused by external factors such as weather conditions, carrier issues, or holidays. You will receive a tracking number via email once your order has been dispatched. Please ensure your shipping address is correct, as we are not liable for orders lost due to incorrect or incomplete addresses.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Returns & Exchanges</h2>
          <p>
            We want you to love your purchase! If you're not completely satisfied, we accept returns or exchanges within 14 days of delivery. Items must be unworn, unwashed, and returned in their original condition with tags intact. Please note that certain sale or final-clearance items may not be eligible for return. Return shipping costs are the responsibility of the customer unless the return is due to a damaged or incorrect item.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">User Accounts</h2>
          <p>
            Creating an account on our platform allows you to view your order history, manage personal details, and enjoy a faster checkout experience. You are responsible for keeping your login credentials secure and for all activities conducted under your account. We reserve the right to suspend or terminate accounts that are found to be involved in fraudulent activity or in violation of these Terms and Conditions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Privacy Policy</h2>
          <p>
            Your privacy is important to us. Personal data collected during your shopping experience is processed in accordance with our Privacy Policy. This includes information such as your name, address, payment details, and browsing behavior, all of which are securely stored and used to enhance your shopping experience. We do not sell or share your personal information with third parties except as required to fulfill your order or by law.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of the Province of Ontario and applicable federal laws of Canada. Any legal disputes arising from the use of our services will be handled in Ontario courts, unless otherwise required by law. By using our platform, you agree to submit to the jurisdiction of these courts in any legal matter related to the use of our services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p>
            If you have any questions, feedback, or require assistance, we’re here to help. Please visit our{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-blue-800">contact page</a> to get in touch with our support team. We aim to respond within 24–48 business hours.
          </p>
        </div>
      </section>
    </div>
  );
}