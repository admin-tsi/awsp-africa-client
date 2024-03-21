import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ConditionsOfSaleAndUse() {
  return (
    <div className="flex flex-col h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">General Conditions of Sale and Use</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>Welcome to OurWebsite.com. These General Conditions of Sale and Use (GCSU) govern your access to and use of our website and services. By accessing or using our service, you agree to be bound by these terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use of the Website</h2>
          <p>This website is intended for personal, non-commercial use. Users must not misuse the site or its services. Compliance with all local laws and regulations is required.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
          <p>All products listed on the site are subject to availability, and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Prices</h2>
          <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Payment</h2>
          <p>All payments are due upon receipt. If a payment is not received or payment method is declined, the buyer forfeits the ownership of any items purchased.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Shipping and Handling</h2>
          <p>Items will be shipped within 1-3 business days of receiving a completed order. Delivery times may vary according to the delivery method selected and the delivery location.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Returns, Refunds, and Exchanges</h2>
          <p>We accept returns up to [number] days after delivery, if the item is unused and in its original condition, and we will refund the full order amount minus the shipping costs for the return.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Privacy Policy</h2>
          <p>We take your privacy seriously. For more information, please see our Privacy Policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Changes to the GCSU</h2>
          <p>We reserve the right to update, change or replace any part of these GCSU by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
          <p>For any questions regarding these GCSU, please contact us at [contact information].</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
