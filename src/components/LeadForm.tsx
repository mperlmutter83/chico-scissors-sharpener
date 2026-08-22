"use client";

import { useState, useRef } from "react";

interface LeadFormProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

export default function LeadForm({
  heading,
  subheading,
  className = "",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company_website: "", // honeypot — humans never fill this
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  // Spam-gate metadata (matches CRM expectations)
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company_website: "",
        });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-ink focus:ring-2 focus:ring-teal-brand focus:border-teal-brand outline-none";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {heading && (
        <h2 className="text-2xl md:text-3xl font-serif text-ink mb-2">
          {heading}
        </h2>
      )}
      {subheading && <p className="text-neutral-600 mb-4">{subheading}</p>}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-ink mb-1"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ink mb-1"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-ink mb-1"
        >
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="e.g. 2 pairs of shears need sharpening, mail-in service..."
          className={inputClass}
        />
      </div>

      {/* Honeypot — invisible to humans, bots fill it */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={formData.company_website}
        onChange={(e) =>
          setFormData({ ...formData, company_website: e.target.value })
        }
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-teal-brand text-white py-3 px-8 rounded-full font-semibold hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p className="text-green-700 text-center font-medium">
          Thank you! We&apos;ll be in touch shortly to confirm your sharpening
          appointment.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-center font-medium">
          Something went wrong. Please call us at (530) 444-1534.
        </p>
      )}
    </form>
  );
}
