import React from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, browse our collection, select your preferred size and quantity, then click 'Add to Cart'. Once done, proceed to checkout and complete the payment using Stripe.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards through Stripe, including Visa, MasterCard, American Express, and UPI-based payments.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link via email. You can use that to check the status of your shipment in real-time.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Yes, you can modify or cancel your order within 2 hours of placing it by contacting our support team. After dispatch, changes cannot be made.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "We offer a 7-day return window on eligible items. Products must be unused, in original packaging, and returned with proof of purchase.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only offer domestic shipping. We're working on expanding our services globally very soon!",
  },
];

const FAQPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 py-16 bg-white text-black">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-12 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              {faq.question}
            </h2>
            <p className="text-base sm:text-lg text-justify">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;