"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "Customs Clearance",
  "Freight Forwarding",
  "Import / Export",
  "Shipping",
  "Vehicle Leasing",
  "Logistics / Transportation",
  "General Enquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this form to Resend, Formspree, Web3Forms, or a custom API endpoint.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Quote and enquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">Full Name<span aria-hidden="true"> *</span><input className="form-input" type="text" name="fullName" autoComplete="name" required /></label>
        <label className="form-label">Phone Number<span aria-hidden="true"> *</span><input className="form-input" type="tel" name="phone" autoComplete="tel" required /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">Email Address<input className="form-input" type="email" name="email" autoComplete="email" /></label>
        <label className="form-label">Service Required<span aria-hidden="true"> *</span><select className="form-input" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
      </div>
      <label className="form-label">Message<span aria-hidden="true"> *</span><textarea className="form-input min-h-36 resize-y" name="message" required placeholder="Tell us what you need help with." /></label>
      <button type="submit" className="button-primary w-fit">Send Enquiry <Send aria-hidden="true" className="size-4" /></button>
      {submitted ? <p role="status" className="border-l-4 border-orange bg-orange/8 px-4 py-3 text-sm leading-6 text-navy"><strong>Thank you for your enquiry.</strong> This preview form is ready to be connected to the company’s preferred submission service. For immediate assistance, please call or use WhatsApp.</p> : null}
    </form>
  );
}
