"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  // State to manage form inputs with a basic interface
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childDetails: "",
    message: "",
  });

  // Added React.ChangeEvent for TypeScript support
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Added React.FormEvent for TypeScript support
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // The Google Form endpoint from your screenshot
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdImOF2O3Icvbz0f7QYbwwfc3H2RXPLD_5x-K_Ae1NrIIiBWg/formResponse";

    const data = new FormData();

    // Mapping your state to the entry IDs found in your network payload
    data.append("entry.1286468613", formData.parentName);
    data.append("entry.1093625231", formData.phone);
    data.append("entry.767084731", formData.childDetails);
    data.append("entry.428628431", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", 
        body: data,
      });

      alert("Enquiry sent successfully!");
      setFormData({ parentName: "", phone: "", childDetails: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className="grid gap-4 rounded-[2rem] border border-accent/10 bg-white p-6 shadow-card sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-accent">
          Parent name
          <input
            required
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="min-h-12 rounded-2xl border border-accent/10 bg-mist/50 px-4 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-accent">
          Phone
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="min-h-12 rounded-2xl border border-accent/10 bg-mist/50 px-4 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="+91"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-accent">
        Child age / grade
        <input
          type="text"
          name="childDetails"
          value={formData.childDetails}
          onChange={handleChange}
          className="min-h-12 rounded-2xl border border-accent/10 bg-mist/50 px-4 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="Example: 5 years / UKG"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-accent">
        Message
        <textarea
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="rounded-2xl border border-accent/10 bg-mist/50 px-4 py-3 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="Tell us what you would like to know"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#302a72] focus:outline-none focus:ring-4 focus:ring-primary/25"
      >
        Send Enquiry
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}