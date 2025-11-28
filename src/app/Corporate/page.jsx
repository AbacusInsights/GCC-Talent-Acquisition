"use client";

import { useEffect } from "react";

export default function ManSection() {
  useEffect(() => {
    // Reveal-on-scroll animation using IntersectionObserver
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Replace these partner images with your real paths
  const partners = [
    "/partners/abacus-logo.png?v=1",
    "/partners/iquartic2.png?v=1",
    "/partners/infosys-logo.jpg?v=1",
    "/partners/newwave.png?v=1",
    "/partners/NexTurn.png?v=1",
    "/partners/1Onyx.png?v=1",
    // duplicates for smooth scroll
    "/partners/abacus-logo.png?v=1",
    "/partners/iquartic2.png?v=1",
    "/partners/infosys-logo.jpg?v=1",
  ];

  return (
    <div className="bg-[#f5f7fa] text-[#222] font-['Roboto',sans-serif] px-6 md:px-10 lg:px-16 py-12 md:py-16">
      {/* HEADER */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1e88e5] rounded-lg flex items-center justify-center shadow-[0_6px_18px_rgba(30,136,229,0.35)] flex-shrink-0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden>
            <path d="M10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 0 1 1 1v3H4V7a1 1 0 0 1 1-1h3V4a2 2 0 0 1 2-2Zm4 4V4h-4v2h4ZM4 11h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z" />
          </svg>
        </div>

        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4c] leading-tight">
          For Corporates{" "}
          <span className="block md:inline font-semibold text-base md:text-lg text-[#1a2b4c] opacity-70">
            ~ Build a Future-Ready Workforce
          </span>
        </h1>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 md:mt-4 text-[#465366] max-w-3xl leading-relaxed text-sm md:text-base">
        We identify and develop fresh IT talent by strengthening their technical, professional, and
        industry-relevant skills through structured, practical learning methodologies.
      </p>

      {/* THREE CARDS */}
      <div className="mt-8 md:mt-10 flex gap-5 flex-wrap">
        {/* CARD 1 */}
        <div className="reveal opacity-0 transform translate-y-4 scale-[0.98] transition-all duration-700 ease-[cubic-bezier(.22,.9,.33,1)] bg-white p-5 md:p-6 rounded-xl border border-[#e3e7ee] shadow-[0_4px_14px_rgba(0,0,0,0.08)] min-w-[260px] flex-1 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#e8f1ff] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#1e88e5" aria-hidden>
                <path d="M3 9l9-6 9 6v2H3V9zm2 3h14v8H5v-8zm3 2v4h2v-4H8zm4 0v4h2v-4h-2z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-[#1a2b4c]">Campus Recruitment Drive</h3>
          </div>

          <ul className="mt-2 text-[#555] text-sm md:text-[0.98rem] list-disc list-inside space-y-2">
            <li>Streamlined talent sourcing through university networks</li>
            <li>Skill-based screening and accurate role alignment</li>
            <li>Transparent reporting for informed hiring decisions</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="reveal opacity-0 transform translate-y-4 scale-[0.98] transition-all duration-700 ease-[cubic-bezier(.22,.9,.33,1)] bg-white p-5 md:p-6 rounded-xl border border-[#e3e7ee] shadow-[0_4px_14px_rgba(0,0,0,0.08)] min-w-[260px] flex-1 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#e8f1ff] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#1e88e5" aria-hidden>
                <path d="M4 3h16v2H4V3zm2 4h12v2H6V7zm-2 4h16v2H4v-2zm2 4h12v2H6v-2zm-2 4h16v2H4v-2z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-[#1a2b4c]">Job-Ready Training</h3>
          </div>

          <ul className="mt-2 text-[#555] text-sm md:text-[0.98rem] list-disc list-inside space-y-2">
            <li>Training tailored to your tech stack</li>
            <li>Hands-on mentoring & real-world projects</li>
            <li>Delivers confident, job-ready talent</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="reveal opacity-0 transform translate-y-4 scale-[0.98] transition-all duration-700 ease-[cubic-bezier(.22,.9,.33,1)] bg-white p-5 md:p-6 rounded-xl border border-[#e3e7ee] shadow-[0_4px_14px_rgba(0,0,0,0.08)] min-w-[260px] flex-1 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#e8f1ff] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#1e88e5" aria-hidden>
                <path d="M7 3h10v2H7V3zm0 4h10v2H7V7zm-4 4h18v2H3v-2zm4 4h10v2H7v-2zm0 4h10v2H7v-2z" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-[#1a2b4c]">Custom Onboarding</h3>
          </div>

          <ul className="mt-2 text-[#555] text-sm md:text-[0.98rem] list-disc list-inside space-y-2">
            <li>Culture-aligned onboarding journeys</li>
            <li>Tool & workflow familiarization</li>
            <li>Faster productivity from day one</li>
          </ul>
        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="mt-10 reveal opacity-0 transform translate-y-4 scale-[0.98] transition-all duration-700">
        <h2 className="text-lg md:text-xl font-semibold text-[#1a2b4c]">Our Partners</h2>
        <p className="text-sm md:text-base text-[#4a566f] mt-2 mb-4">
          Some of the companies and universities we have worked with.
        </p>

        <div className="relative fadeWrapper">
          <div className="partnersScroll overflow-hidden py-4">
            <div
              className="partnersRow flex gap-7 items-center"
              style={{ animation: "slidePartners 28s linear infinite" }}
            >
              {partners.map((src, idx) => (
                <div
                  key={idx}
                  className="partnerCard min-w-[170px] md:min-w-[230px] h-[80px] md:h-[110px] bg-white rounded-xl border border-[#dde3ee] shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 transform transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                >
                  <img
                    src={src}
                    alt={`partner-${idx}`}
                    className="max-w-[140px] md:max-w-[180px] max-h-[60px] md:max-h-[70px] object-contain filter grayscale-[25%] opacity-95 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* fade masks are implemented via global CSS below */}
        </div>
      </div>

      {/* CTA */}
      <div className="reveal opacity-0 transform translate-y-4 scale-[0.98] transition-all duration-700 mt-8 md:mt-10 bg-[#e3efff] rounded-xl p-4 md:p-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-base md:text-lg font-semibold">Ready to build your next talent cohort?</h3>
          <p className="text-sm md:text-base text-[#4a566f]">Partner with us to design a hiring and training model tailored to your organisation.</p>
        </div>

        <button className="ctaButton inline-flex items-center gap-2 bg-gradient-to-tr from-[#1e88e5] to-[#42a5f5] text-white rounded-full px-6 md:px-8 h-9 md:h-10 text-xs md:text-sm font-semibold shadow-[0_3px_10px_rgba(30,136,229,0.35)] hover:-translate-y-0.5 transition-transform active:scale-[0.98]">
          <span>Partner With Us</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      {/* tiny global styles for animations & masks */}
      <style jsx global>{`
        /* Reveal */
        .reveal {
          opacity: 0;
          transform: translateY(18px) scale(0.97);
          filter: blur(4px);
          transition: opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /* Fade masks for partners row */
        .fadeWrapper::before,
        .fadeWrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 72px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        .fadeWrapper::before {
          left: 0;
          background: linear-gradient(to right, #f5f7fa, transparent);
        }
        .fadeWrapper::after {
          right: 0;
          background: linear-gradient(to left, #f5f7fa, transparent);
        }

        /* partners scroll animation */
        @keyframes slidePartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partnersRow { display: flex; }
        .partnersScroll:hover .partnersRow { animation-play-state: paused !important; }

        /* small image tweak if needed (e.g. infosys) */
        .partnerCard img[src*="infosys"] {
          max-width: 160px !important;
          max-height: 70px !important;
          transform: scale(1.03);
        }

        /* responsive tweaks (if you want slightly different pacing) */
        @media (max-width: 768px) {
          .fadeWrapper::before,
          .fadeWrapper::after { width: 40px; }
          .partnersRow { animation: slidePartners 18s linear infinite; }
        }
      `}</style>
    </div>
  );
}
