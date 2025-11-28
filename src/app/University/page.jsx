"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image"; // change to <img> if not using Next.js
import { MdMenuBook, MdWorkspacePremium, MdAccountBalance } from "react-icons/md";
import { FaPeopleCarryBox } from "react-icons/fa6";

export default function UniversityCard() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let speed = 0.25; // very slow (pixels per frame accumulation)
    let accum = 0;
    let rafId;

    const step = () => {
      if (!container) return;
      accum += speed;
      if (accum >= 1) {
        container.scrollLeft += 1;
        accum = 0;
      }
      // when we've scrolled halfway (because logos duplicated), reset to 0
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const logos = [
    "/Univer/IITM.svg",
    "/Univer/NIE.png",
    "/Univer/VVCE.png",
    "/Univer/Malnad.png",
    "/Univer/ATME.png",
    "/Univer/MIT.png",
    "/Univer/KIT.png",
  ];

  // duplicate for loop
  const scrollingLogos = [...logos, ...logos];

  return (
    <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-8 font-['Roboto',sans-serif]">
      {/* UNIVERSITY SECTION */}
      <section className="bg-[#F7FAFC] rounded-xl p-6 md:p-8">
        {/* heading */}
        <div className="flex items-center gap-3 md:gap-4">
          <span className="w-12 h-12 md:w-14 md:h-14 bg-[#0ea5e9] rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(14,165,233,0.6)] flex-shrink-0">
            <MdAccountBalance className="text-white text-xl md:text-2xl" />
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0D1B2A] leading-tight">
            For Universities
            <span className="block md:inline text-base md:text-lg font-semibold text-[#0D1B2A] opacity-80 ml-1">
              ~ Build job-ready graduates
            </span>
          </h2>
        </div>

        {/* description */}
        <p className="mt-4 md:mt-6 text-[#6C7A92] text-sm md:text-base max-w-3xl leading-relaxed">
          We co-design skill-focused electives, run technical workshops, and assist with placements to
          make students job-ready. Our programs bridge academic learning with industry needs,
          ensuring students gain practical, employable skills.
        </p>

        {/* cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <article className="bg-white border border-[#E3E8EF] rounded-2xl p-5 md:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-transform cursor-pointer">
            <header className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-[#e6f3ff] rounded-lg flex items-center justify-center shadow-[0_4px_8px_rgba(0,102,204,0.12)]">
                <MdMenuBook className="text-[#0b98f3] text-lg" />
              </span>
              <h3 className="text-lg md:text-[1.05rem] font-bold text-[#0ea5e9]">Electives</h3>
            </header>

            <ul className="mt-2 text-[#6C7A92] text-sm md:text-[0.98rem] list-disc list-inside space-y-2">
              <li>Credit-based electives co-created with industry experts.</li>
              <li>Students gain job-relevant skills using real-world tools.</li>
              <li>Assessments mirror real industry tasks & problem-solving.</li>
            </ul>
          </article>

          {/* Card 2 */}
          <article className="bg-white border border-[#E3E8EF] rounded-2xl p-5 md:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-transform cursor-pointer">
            <header className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-[#e6f3ff] rounded-lg flex items-center justify-center shadow-[0_4px_8px_rgba(0,102,204,0.12)]">
                <FaPeopleCarryBox className="text-[#0b98f3] text-lg" />
              </span>
              <h3 className="text-lg md:text-[1.05rem] font-bold text-[#0ea5e9]">Internships</h3>
            </header>

            <ul className="mt-2 text-[#6C7A92] text-sm md:text-[0.98rem] list-disc list-inside space-y-2">
              <li>Internships with real projects, sprints & mentorship from industry professionals.</li>
              <li>Students build strong portfolios that showcase real work experience.</li>
              <li>Workflows, tools & engineering practices mirror actual industry environments.</li>
            </ul>
          </article>

          {/* Card 3 */}
          <article className="bg-white border border-[#E3E8EF] rounded-2xl p-5 md:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-transform cursor-pointer">
            <header className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-[#e6f3ff] rounded-lg flex items-center justify-center shadow-[0_4px_8px_rgba(0,102,204,0.12)]">
                <MdWorkspacePremium className="text-[#0b98f3] text-lg" />
              </span>
              <h3 className="text-lg md:text-[1.05rem] font-bold text-[#0ea5e9]">Placement Support</h3>
            </header>

            <ul className="mt-2 text-[#6C7A92] text-sm md:text-[0.98rem] list-disc list-inside space-y-2">
              <li>Hands-on, job-focused placement training programs.</li>
              <li>Uses real industry projects, tools & workflows.</li>
              <li>Bootcamps simulate real work to build confidence faster.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* PARTNERS / LOGOS STRIP */}
      <section className="bg-[#F7FAFC] rounded-xl p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-semibold text-[#0D1B2A]">Our Partners</h3>
        <p className="mt-2 text-sm md:text-base text-[#6C7A92] max-w-3xl">
          Some of the universities we collaborate with to drive skill-based education.
        </p>

        <div className="mt-6">
          {/* dark strip container with left/right fade overlays implemented via elements */}
          <div className="relative bg-[#F7FAFC] rounded-lg overflow-hidden py-4">
            {/* left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-20 bg-gradient-to-r from-[#F7FAFC] to-transparent z-10" />
            {/* right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-20 bg-gradient-to-l from-[#F7FAFC] to-transparent z-10" />

            {/* logos scrolling container */}
            <div
              ref={scrollRef}
              className="flex gap-5 items-center overflow-hidden px-3 md:px-4"
              aria-hidden={false}
            >
              {scrollingLogos.map((src, idx) => (
                <div
                  key={idx}
                  className="min-w-[120px] md:min-w-[170px] h-[70px] md:h-[110px] bg-white border border-[#E3EAEF] rounded-xl flex items-center justify-center p-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer"
                >
                  {/* Next.js Image for optimization; if not using Next, swap to <img src=... /> */}
                  <Image
                    src={src}
                    alt={`partner-${idx}`}
                    width={140}
                    height={70}
                    className="object-contain max-h-full"
                    style={{ width: "auto", height: "auto" }}
                    priority={idx < logos.length} // prioritize the first set
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#E6F6FF] rounded-xl p-4 md:p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div className="text-center md:text-left">
          <h4 className="text-base md:text-lg font-semibold text-[#0D1B2A]">Ready to Collaborate?</h4>
          <p className="mt-1 text-sm text-[#6C7A92]">Let’s build the future of talent together. Reach out to us today!</p>
        </div>

        <div className="w-full md:w-auto">
          <button className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-5 py-3 rounded-full text-sm md:text-base font-semibold shadow-[0_6px_18px_rgba(14,165,233,0.35)] transition-transform active:scale-[0.98]">
            Partner With Us →
          </button>
        </div>
      </section>
    </div>
  );
}
