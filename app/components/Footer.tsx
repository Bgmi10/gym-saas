
"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactForm } from "./Contactus";

import {
  Mail,
  MapPin,
  Phone,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
  ];

  const solutions = [
    { label: "Gym Management", href: "/#features" },
    { label: "Membership Management", href: "/#features" },
    { label: "Attendance Tracking", href: "/#features" },
    { label: "Payment Management", href: "/#features" },
    { label: "Business Analytics", href: "/#features" },
  ];

  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10 overflow-hidden">

      {/* TOP DASHED LINE */}
      <div className="w-full border-t border-dashed border-lime-400/30" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 py-12">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr] gap-10 lg:gap-12 items-start">

          {/* BRAND */}
          <div>

            {/* DEMO GYM SAAS LOGO */}
            <Link href="/" className="inline-flex items-center gap-3 group">

              <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center text-black group-hover:scale-105 transition-transform">
                <Dumbbell size={27} strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight leading-none">
                  DEMO<span className="text-lime-400">GYM</span>
                </h2>

                <p className="text-[9px] tracking-[3px] text-neutral-400 mt-1 uppercase">
                  SaaS Platform
                </p>
              </div>

            </Link>

            <p className="mt-5 max-w-[280px] text-xs leading-6 text-neutral-400">
              SMARTER GYM MANAGEMENT STARTS HERE.
              MANAGE MEMBERS, TRACK ATTENDANCE,
              AUTOMATE PAYMENTS AND GROW YOUR
              FITNESS BUSINESS WITH ONE POWERFUL PLATFORM.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs text-lime-400">
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              Built for modern fitness businesses
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-base md:text-lg font-medium uppercase tracking-wide text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3">

              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-lime-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="text-sm text-neutral-400 hover:text-lime-400 transition-colors duration-300"
              >
                Contact Us
              </button>

            </div>

          </div>

          {/* OUR SOLUTIONS */}
        

          {/* CONTACT */}
          <div>

            <h3 className="text-base md:text-lg font-medium uppercase tracking-wide text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              {/* ADDRESS */}
              <div>

                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-lime-400" />

                  <p className="text-sm font-medium uppercase text-white">
                    Location
                  </p>
                </div>

                <p className="text-xs text-neutral-400 leading-6">
                  Your Business Address,
                  Your City, Your State,
                  India.
                </p>

              </div>

              {/* EMAIL */}
              <div>

                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-lime-400" />

                  <p className="text-sm font-medium uppercase text-white">
                    Email
                  </p>
                </div>

                <a
                  href="mailto:hello@demogymsaas.com"
                  className="inline-block mt-2 text-xs text-neutral-400 hover:text-lime-400 transition-colors"
                >
                  hello@demogymsaas.com
                </a>

              </div>

              {/* PHONE */}
              <div>

                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-lime-400" />

                  <p className="text-sm font-medium uppercase text-white">
                    Phone
                  </p>
                </div>

                <a
                  href="tel:+910000000000"
                  className="inline-block mt-2 text-xs text-neutral-400 hover:text-lime-400 transition-colors"
                >
                  +91 XXXXX XXXXX
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* CTA SECTION */}
        

        {/* BOTTOM FOOTER */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-[11px] text-neutral-500 text-center">
            © {new Date().getFullYear()} Demo Gym SaaS. All Rights Reserved.
          </p>

          {/* SOCIAL LINKS - ORIGINAL SVG ICONS */}
          <div className="flex flex-wrap items-center gap-3">

            {/* INSTAGRAM */}
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Gym SaaS Instagram"
              className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </Link>

            {/* FACEBOOK */}
            <Link
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Gym SaaS Facebook"
              className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.2c0-1 .3-1.7 1.8-1.7H17V2.3c-.8-.1-1.8-.3-3-.3-3 0-5 1.8-5 5.1v2.4H6V13h3v9h4.5Z" />
              </svg>
            </Link>

            {/* THREADS */}
            <Link
              href="https://threads.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Gym SaaS Threads"
              className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              <span className="text-[21px] font-black leading-none">
                @
              </span>
            </Link>

            {/* YOUTUBE */}
            <Link
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Gym SaaS YouTube"
              className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M23 12c0-2.2-.2-4.2-.5-5.4-.3-1.1-1.2-2-2.3-2.3C18.4 3.8 12 3.8 12 3.8s-6.4 0-8.2.5C2.7 4.6 1.8 5.5 1.5 6.6 1.2 7.8 1 9.8 1 12s.2 4.2.5 5.4c.3 1.1 1.2 2 2.3 2.3 1.8.5 8.2.5 8.2.5s6.4 0 8.2-.5c1.1-.3 2-1.2 2.3-2.3.3-1.2.5-3.2.5-5.4ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </Link>

            {/* LINKEDIN */}
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo Gym SaaS LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM9 8.5V21h3.5v-6.2c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21H21v-6.8c0-3.4-.7-6-4.7-6-1.9 0-3.2 1-3.8 2V8.5H9Z" />
              </svg>
            </Link>

          </div>

          <p className="text-[11px] text-neutral-500">
            Powered by Demo Gym SaaS
          </p>

        </div>

      </div>

      {/* CONTACT FORM */}
      <ContactForm
        open={contactOpen}
        setOpen={setContactOpen}
      />

    </footer>
  );
}
