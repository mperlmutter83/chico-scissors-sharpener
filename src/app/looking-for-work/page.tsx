import type { Metadata } from "next";
import WorkForm from "@/components/WorkForm";

export const metadata: Metadata = {
  title: "Looking for Work",
  description:
    "Looking for scissor and blade sharpening work in Chico? Local sharpening businesses are hiring. Fill out the quick form and we'll connect you — or call (530) 444-1534.",
  alternates: { canonical: "https://chicoscissorsharpener.com/looking-for-work" },
};

const STEPS = [
  {
    n: "1",
    title: "Tell us about yourself",
    body: "A quick 60-second form — no resume, no cover letter, no endless applications.",
  },
  {
    n: "2",
    title: "We connect you",
    body: "We share your details with local sharpening businesses that are actively hiring.",
  },
  {
    n: "3",
    title: "You hear back directly",
    body: "Interested businesses contact you by phone, usually within a few days.",
  },
];

const WORK_TYPES = [
  "Scissor Sharpening",
  "Clipper Blade Sharpening",
  "Knife Sharpening",
  "Shear Repair & Adjustment",
  "Salon Tool Maintenance",
  "Pickup & Delivery Driver",
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">
            Looking for Work?
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-white sm:text-5xl">
            Scissor &amp; Blade Sharpening Work in Chico
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/70">
            Local sharpening businesses are growing and looking for dependable
            people. Tell us about yourself and we&apos;ll connect you with
            businesses that are hiring — free, fast, and no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block rounded-full bg-teal-brand px-7 py-3 font-semibold text-white hover:bg-teal-dark transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href="tel:+15304441534"
              className="inline-block rounded-full border-2 border-mint px-7 py-3 font-semibold text-mint hover:bg-mint/10 transition-colors"
            >
              Or Call (530) 444-1534
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-3xl text-ink text-center">
          How It Works
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-3xl bg-mint/10 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-brand text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/60 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-3xl text-ink text-center">
            The Kind of Work Available
          </h2>
          <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto">
            Sharpening businesses in the Chico area hire for a range of roles,
            including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-neutral-200 bg-white px-5 py-4 text-ink font-medium shadow-sm"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-ink text-center">
            Apply in 60 Seconds
          </h2>
          <p className="mt-2 text-center text-neutral-600">
            Free and confidential — we&apos;ll only share your details with
            businesses that are hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-neutral-600">
          Own a sharpening business and need reliable people?{" "}
          <a
            href="tel:+15304441534"
            className="font-bold text-teal-brand underline"
          >
            Call (530) 444-1534
          </a>
        </p>
      </section>
    </>
  );
}
