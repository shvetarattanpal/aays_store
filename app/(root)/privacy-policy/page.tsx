'use client';

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 text-black">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed text-justify">
        <div>
          <p>
            At our Canadian online clothing store, your privacy is of the utmost importance to us. This Privacy Policy describes how we collect, use, store, and protect your personal information when you visit or make a purchase through our website. By using our site, you agree to the collection and use of information in accordance with this policy. We are committed to ensuring that your personal data remains secure, confidential, and used only in ways that are fair and transparent.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us during the shopping experience, including your name, email address, mailing address, billing information, phone number, and details related to your orders. This also includes any communication you have with our support team or when you subscribe to our newsletters. Additionally, we may automatically collect data related to your browser, device type, IP address, pages visited, and browsing behavior through cookies and analytics tools to improve your shopping experience.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">How We Use Your Information</h2>
          <p>
            The information you provide allows us to process transactions, deliver orders, provide customer service, and personalize your shopping experience. It also enables us to communicate with you about promotions, order updates, returns, or support queries. Aggregated, non-identifiable data may be used for internal business analysis and marketing strategies. We never sell or rent your personal data to third parties, and your trust in us is a top priority in how we handle your information.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Data Protection & Security</h2>
          <p>
            We implement appropriate physical, technical, and administrative security measures to protect your information from unauthorized access, alteration, or disclosure. All payment transactions are encrypted and processed securely through certified payment gateways like Stripe. Access to personal data is restricted to authorized personnel only. While we strive to use commercially acceptable means to protect your personal data, please remember that no method of transmission over the Internet is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Third-Party Services</h2>
          <p>
            We may use third-party service providers to perform tasks on our behalf, such as order fulfillment, payment processing, and email communication. These providers only have access to the information needed to perform their specific services and are contractually obligated to protect your data and comply with applicable privacy regulations. We are not responsible for the privacy practices of other websites you may be linked to through our site, so we encourage you to read their privacy policies as well.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Cookies & Tracking</h2>
          <p>
            Our website uses cookies to enhance your browsing experience, store user preferences, and help us understand how our site is used. Cookies allow us to remember items in your cart, maintain login sessions, and analyze user behavior for performance optimization. You may choose to disable cookies in your browser settings; however, doing so may limit some functionalities of our site. We also use third-party analytics tools like Google Analytics to collect traffic and usage data in anonymized form.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Email Communication</h2>
          <p>
            When you sign up for our newsletter or place an order, you may receive email communications from us regarding product updates, exclusive offers, or order confirmations. We respect your inbox, and you can opt out at any time by clicking the "unsubscribe" link in any marketing email. Transactional emails related to your orders will still be sent regardless of your marketing preferences, as they are essential for fulfilling our service to you.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Your Rights</h2>
          <p>
            As a user, you have the right to access, correct, update, or delete your personal information stored with us. You may do this by contacting our support team through our website. You also have the right to withdraw consent to data processing, request restrictions, or object to specific types of data use. If you are a resident of Canada, your rights are protected under Canadian privacy laws, including PIPEDA, and we are committed to complying with all applicable regulations.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, legal obligations, or service offerings. Updates will be posted on this page with the revised effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information and maintaining your trust.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p>
            If you have any questions, concerns, or feedback regarding our Privacy Policy or the handling of your personal information, please don’t hesitate to reach out. You can contact our support team by visiting our{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-blue-800">contact page</a>. We’re here to ensure your experience with our store is secure, enjoyable, and respectful of your privacy at every step.
          </p>
        </div>
      </section>
    </div>
  );
}