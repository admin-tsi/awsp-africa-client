import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function LegalPage() {
  return (
    <div className="flex flex-col h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl text-center font-bold mb-4">Legal Information</h1>
          <p className="text-md text-center">Last updated: March 21, 2024</p>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Terms of Service</h2>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Copyright Information</h2>
          <p className="mt-4">
            All content included on this site, such as text, graphics, logos, images, and software, is the property of OurWebsite.com or its content suppliers and protected by international copyright laws.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Disclaimer</h2>
          <p className="mt-4">
            The information provided on OurWebsite.com is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-4">
            For any legal inquiries or concerns, please contact us at:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Email: legal@ourwebsite.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Legal Way, Lawtown, LT 12345</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}
