import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Chico Scissor Sharpener is dedicated to exceptional sharpening services for barbers and salons — precision, reliability, and personalized expert care in Chico, CA.",
};

const features = [
  {
    title: "Unmatched Expertise",
    text: "Our team brings years of experience to ensure your tools are in peak condition.",
  },
  {
    title: "Quality Assurance",
    text: "We guarantee satisfaction with every sharpening service we provide.",
  },
  {
    title: "Convenient Service",
    text: "Enjoy quick turnaround times and reliable service tailored to your needs.",
  },
];

const accolades = [
  {
    year: "2018",
    title: "Best Scissor Sharpening Service",
    description:
      "Honored by the National Barber Association for our exceptional sharpening services and commitment to excellence.",
  },
  {
    year: "2019",
    title: "Innovation in Sharpening Techniques",
    description:
      "Awarded by the Salon Professionals Guild for introducing innovative techniques that revolutionized the sharpening process.",
  },
  {
    year: "2021",
    title: "Customer Choice Award",
    description:
      "Voted by our loyal customers as the top choice for scissor sharpening, reflecting our dedication to customer satisfaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-12 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-brand text-xs font-bold tracking-widest uppercase mb-4">
            Precision in Every Cut
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
            Expert Scissor Sharpening Services
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience unparalleled sharpness with our specialized scissor
            sharpening services, designed to enhance your cutting precision.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-teal-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors"
          >
            Discover More
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6">
              <h2 className="font-serif text-xl font-bold text-ink mb-3">
                {f.title}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/contact-us"
            className="text-teal-brand font-semibold hover:underline"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            Our Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <p className="text-neutral-600 leading-relaxed">
              Chico Scissor Sharpener is dedicated to providing exceptional
              sharpening services for barbers and salons. Our mission is to
              enhance the cutting experience by delivering precision and
              reliability with every sharpened tool. We value quality,
              integrity, and customer satisfaction, ensuring that each client
              receives personalized attention and expert care. Established with
              a passion for craftsmanship, we continually strive to uphold the
              highest standards in the industry.
            </p>
            <div>
              <Image
                src="/images/about-page.jpg"
                alt="Scissor sharpening craftsmanship"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            Our Accolades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accolades.map((a) => (
              <div
                key={a.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <p className="text-teal-brand font-bold text-lg mb-4">
                  {a.year}
                </p>
                <h3 className="font-serif text-xl font-bold text-ink mb-3">
                  {a.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mint py-16 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
            Enhance Your Cutting Precision Today
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience unparalleled sharpness with Chico Scissor Sharpener.
            Reach out to us for expert scissor and shear sharpening services
            tailored for barbers and salons. Elevate your craft with precision
            tools. Get in touch today!
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-ink px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
