import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";

const services = [
  { num: "01", title: "Standard Scissor Sharpening" },
  { num: "02", title: "Premium Shear Refinement" },
  { num: "03", title: "Clipper Blade Honing" },
  { num: "04", title: "Custom Edge Restoration" },
];

const awards = [
  {
    year: "2023",
    title: "Best Scissor Sharpening Service",
    description:
      "Recognized for outstanding precision and customer satisfaction in the scissor sharpening industry.",
    icon: "medal",
  },
  {
    year: "2022",
    title: "Innovative Service Award",
    description:
      "Awarded for introducing cutting-edge techniques that enhance the longevity of salon tools.",
    icon: "medal",
  },
  {
    year: "2021",
    title: "Customer Choice Award",
    description:
      "Voted as the top choice by salon professionals for reliable and efficient sharpening services.",
    icon: "thumbs-up",
  },
];

function AwardIcon({ icon }: { icon: string }) {
  if (icon === "thumbs-up") {
    return (
      <svg
        className="w-12 h-12 mx-auto text-teal-brand"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
      </svg>
    );
  }
  return (
    <svg
      className="w-12 h-12 mx-auto text-teal-brand"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2a5 5 0 015 5c0 1.61-.76 3.04-1.94 3.96L19 20h-4l-3-3-3 3H5l3.94-9.04A4.99 4.99 0 017 7a5 5 0 015-5zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-brand text-xs font-bold tracking-widest uppercase mb-4">
                Precision Sharpening for Professionals
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6">
                Elevate Your Craft with Expert Scissor Care
              </h1>
              <p className="text-neutral-600 mb-8 max-w-lg leading-relaxed">
                Experience unparalleled sharpness and precision with our expert
                scissor sharpening services, tailored for barbers and salons.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-teal-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors"
              >
                Discover More
              </Link>
            </div>
            <div>
              <Image
                src="/images/hero-home.jpg"
                alt="Barber cutting hair with freshly sharpened scissors"
                width={1600}
                height={1060}
                priority
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            About Chico Scissor Sharpener
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <p className="text-neutral-600 leading-relaxed">
              Chico Scissor Sharpener is dedicated to enhancing the performance
              of scissors and shears for barbers and salons. Our mission is to
              provide exceptional sharpening services that extend the life of
              your tools, ensuring every cut is smooth and precise. With years
              of expertise, we are committed to delivering quality and
              reliability to our clients.
            </p>
            <div>
              <Image
                src="/images/about-home.jpg"
                alt="Professional barber at work"
                width={1200}
                height={801}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                Our Sharpening Services
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Explore our range of specialized sharpening services designed to
                meet the needs of professional barbers and salons.
              </p>
            </div>
            <div>
              {services.map((s) => (
                <div
                  key={s.num}
                  className="flex items-baseline border-b border-neutral-200 py-4"
                >
                  <span className="text-teal-brand text-sm font-sans font-semibold mr-4">
                    {s.num}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">
                    {s.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Awards */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            Industry Excellence Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((a) => (
              <div
                key={a.year}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <p className="text-teal-brand font-bold text-lg mb-4">
                  {a.year}
                </p>
                <div className="mb-4">
                  <AwardIcon icon={a.icon} />
                </div>
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
            Enhance Your Craft Today
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference with expertly sharpened tools. Contact us
            to book your appointment or learn more about our services. Your
            satisfaction is our priority!
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-ink px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </>
  );
}
