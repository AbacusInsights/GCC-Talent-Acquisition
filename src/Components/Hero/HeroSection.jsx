"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const images = [
    "/Hero/imageHero1.jpg",
    "/Hero/imageHero2.jpg",
    "/Hero/imageHero3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex justify-center items-center min-h-[90vh] bg-[#e3e8f1ff] px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden font-['Roboto',sans-serif] py-6">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Side: Text Content */}
        <div className="max-w-3xl">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-5 text-[12px] font-extrabold text-[#0ea5e9] uppercase tracking-wider border border-[#e0fef2ff]">
            • Empowering Growth
          </div>

          <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-extrabold leading-tight text-[#0f172a] mb-6">
            Acquire, Train & <br />
            Deploy <br />
            <span className="text-[#0284c7]">Future-Ready IT Talent</span>
          </h1>

          <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.125rem] text-[#475569] leading-relaxed mb-8 max-w-[90%]">
            We bridge the gap between academics and industry by preparing students for the workplace
            and helping companies hire trained professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/Corporate"
              className="inline-flex items-center gap-4 bg-[#0f172a] text-white px-6 py-4 rounded-[16px] text-[18px] font-semibold shadow-md transform transition-transform duration-200 hover:scale-105 whitespace-nowrap"
            >
              <span className="text-lg">💼</span>
              <span>For Corporates</span>
            </Link>

            <Link
              href="/University"
              className="inline-flex items-center gap-4 bg-[#0f172a] text-white px-6 py-4 rounded-[16px] text-[18px] font-semibold shadow-sm border border-transparent hover:border-transparent transform transition-transform duration-200 hover:scale-105 whitespace-nowrap"
            >
              <span className="text-lg">🎓</span>
              <span>For Universities</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Carousel */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] rounded-[24px] overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] bg-white">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
