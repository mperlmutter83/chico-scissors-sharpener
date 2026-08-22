"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Chico Scissor Sharpener"
              width={64}
              height={64}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-neutral-700 hover:text-teal-brand transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+15304441534"
              className="text-sm font-semibold text-teal-brand hover:text-teal-dark transition-colors"
            >
              (530) 444-1534
            </a>
          </nav>

          {/* Mobile: call + hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="tel:+15304441534"
              className="text-sm font-semibold text-teal-brand"
            >
              (530) 444-1534
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 text-neutral-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 border-t border-neutral-100">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-700 hover:text-teal-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
