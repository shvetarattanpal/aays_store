"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 py-16 bg-white text-black">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-10 text-center">
        Contact Us
      </h1>
      <p className="text-base sm:text-lg text-justify mb-10">
        Whether you have a question about your order, want to give feedback, we're here for you. Reach out using the form below. We aim to respond within 24–48 hours on business days.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>

      {success && (
        <p className="text-green-600 mt-4">Your message has been sent!</p>
      )}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ContactPage;