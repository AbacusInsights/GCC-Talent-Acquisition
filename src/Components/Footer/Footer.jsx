"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 sm:px-10 lg:px-20 py-14"
      style={{
        background:
          "linear-gradient(90deg, #0A2A38 0%, rgb(19, 97, 143) 50%, #0D76B1 100%)",
      }}
    >
      {/* -------- MAIN FOOTER CONTENT -------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.6fr_0.9fr_1fr_1.1fr] gap-10 text-gray-300">

        {/* ---- COLUMN 1: LOGO + OVERVIEW + SOCIAL ---- */}
        <div>
          <Image
            src="/Hero/logo.png"
            width={230}
            height={110}
            alt="Learners Digital Logo"
            className="object-contain mb-6"
          />

          <p className="text-sm leading-6 opacity-90 mb-4">
            Empowering global talent through industry-driven learning, innovation, and deployment opportunities across the GCC region.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="cursor-pointer hover:text-[#14A4F3] transition"
                />
              )
            )}
          </div>
        </div>

        {/* ---- COLUMN 2: QUICK LINKS ---- */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/About" className="hover:text-[#14A4F3]">About Us</Link></li>
            <li><Link href="/jobs" className="hover:text-[#14A4F3]">Jobs</Link></li>
            <li><Link href="/internship" className="hover:text-[#14A4F3]">Internships</Link></li>
            {/* <li><Link href="/partners" className="hover:text-[#14A4F3]">GCC Connect</Link></li> */}
            <li><Link href="/University" className="hover:text-[#14A4F3]">Universities</Link></li>
          </ul>
        </div>

        {/* ---- COLUMN 3: CONTACT INFO ---- */}
        {/* ---- COLUMN 3: CONTACT INFO ---- */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <p className="text-sm opacity-90 mb-3">
            Learners Digital, Mysore, Karnataka - 571130
          </p>

          <p className="text-sm flex items-center gap-2">
            <FaPhoneAlt /> +91 99169 33202
          </p>

          <p className="text-sm flex items-center gap-2 mt-2">
            <FaEnvelope /> murali.konareddy@learnersdigital.com
          </p>
        </div>

        {/* ---- COLUMN 4: CALL-TO-ACTION ---- */}
        <div>
          <h3 className="text-white font-semibold mb-4">Partner With Us</h3>

          <p className="text-sm opacity-90 mb-4">
            Are you a corporate or university looking to collaborate with us?
          </p>

          <Link href="/partner">
            <button className="w-full bg-[#14A4F3] hover:bg-[#1185c5] text-white py-2 rounded-lg font-medium transition">
              Become a Partner
            </button>
          </Link>
        </div>
      </div>

      {/* -------- COPYRIGHT SECTION -------- */}
      <div className="text-center text-gray-300 text-sm mt-10 border-t border-gray-600 pt-6">
        <p className="font-medium">
          © {year} Learners Digital — All Rights Reserved.
        </p>

        <div className="flex justify-center gap-6 text-xs mt-2">
          <Link href="/terms" className="hover:text-[#14A4F3]">Terms</Link>
          <Link href="/privacy" className="hover:text-[#14A4F3]">Privacy</Link>
          <Link href="/sitemap" className="hover:text-[#14A4F3]">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}