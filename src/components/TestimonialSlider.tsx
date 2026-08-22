"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Chico Scissor Sharpener has transformed my salon's efficiency. Every pair of scissors feels brand new, and my clients notice the difference!",
    author: "Sarah L., Salon Owner",
  },
  {
    quote:
      "I trust Chico Scissor Sharpener with all my tools. Their attention to detail and quick turnaround have made them an essential partner for my barbershop.",
    author: "Mike T., Barber",
  },
  {
    quote:
      "The precision sharpening from Chico Scissor Sharpener is unmatched. My shears glide effortlessly, making every cut perfect.",
    author: "Emma R., Stylist",
  },
  {
    quote:
      "I've tried other services, but none compare to the expertise and professionalism of Chico Scissor Sharpener. Highly recommended!",
    author: "Carlos M., Salon Owner",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-ink text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-light italic leading-relaxed min-h-32">
          &ldquo;{testimonials[index].quote}&rdquo; &ndash;{" "}
          {testimonials[index].author}
        </p>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((index - 1 + testimonials.length) % testimonials.length)
            }
            className="text-white/60 hover:text-white transition-colors text-2xl"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % testimonials.length)}
            className="text-white/60 hover:text-white transition-colors text-2xl"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
