import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book your scissor and shear sharpening with Chico Scissor Sharpener. Call (530) 444-1534 or send us a message — mail-in service available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-12 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-brand text-xs font-bold tracking-widest uppercase mb-4">
            Expert Scissor and Shear Sharpening Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
            Precision Sharpening for Barbers and Salons
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Enhance your cutting tools with our professional sharpening
            services, ensuring precision and longevity for every snip.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-neutral-50 rounded-lg">
            <h2 className="font-serif text-xl font-bold text-ink mb-2">
              Phone
            </h2>
            <a
              href="tel:+15304441534"
              className="text-teal-brand font-semibold hover:underline"
            >
              (530) 444-1534
            </a>
          </div>
          <div className="text-center p-6 bg-neutral-50 rounded-lg">
            <h2 className="font-serif text-xl font-bold text-ink mb-2">
              Email
            </h2>
            <a
              href="mailto:info@chicoscissorsharpener.com"
              className="text-teal-brand font-semibold hover:underline"
            >
              info@chicoscissorsharpener.com
            </a>
          </div>
          <div className="text-center p-6 bg-neutral-50 rounded-lg">
            <h2 className="font-serif text-xl font-bold text-ink mb-2">
              Address
            </h2>
            <p className="text-neutral-600">
              1350 Mangrove #155
              <br />
              Chico CA 95926
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <LeadForm
            heading="Book Your Sharpening Appointment"
            subheading="Fill out the form below to schedule a convenient time for your scissor and shear sharpening. Our experts are ready to enhance your tools' performance."
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-neutral-50 py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-4">
            Common Questions About Our Sharpening Services
          </h2>
          <p className="text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
            We understand you may have questions about our sharpening services.
            Here are some of the most frequently asked questions to help you
            make an informed decision.
          </p>
          <FaqAccordion />
        </div>
      </section>

      {/* Image + CTA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/contact-hero.jpg"
            alt="Barber tools workspace"
            width={1600}
            height={1200}
            className="w-full h-auto object-cover rounded-lg mb-16"
          />
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
              Get in Touch for Premium Sharpening Services
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Ready to experience the difference sharp scissors can make?
              Contact us today to learn more about our services or to schedule
              your sharpening. We&apos;re here to help your tools perform at
              their best!
            </p>
            <a
              href="tel:+15304441534"
              className="inline-block bg-teal-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors"
            >
              Call (530) 444-1534
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
