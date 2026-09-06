import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Get in Touch"
        title="Let's Build Something Together"
        subtitle="Whether you have an inquiry regarding desktop software, full-stack engineering, or computational research, my inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Contact Details & Channels */}
        <div className="lg:col-span-5">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
