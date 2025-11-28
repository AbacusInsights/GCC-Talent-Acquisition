// "use client";

// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
//   FaTwitter,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer
//       className="px-6 md:px-20 py-6"
//       style={{
//         background: "linear-gradient(90deg, #0A2A38 0%, #0E4E74 50%, #0D76B1 100%)",
//       }}
//     >

//       {/* Content Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pb-4 text-gray-300">
        
//         {/* Company */}
//         <div>
//           <h3 className="text-white font-semibold mb-2 text-[14px]">Company</h3>
//           <ul className="space-y-1 text-xs">
//             <li><Link href="/about-us" className="hover:text-[#14A4F3]">About Us</Link></li>
//             <li><Link href="/our-team" className="hover:text-[#14A4F3]">Our Team</Link></li>
//           </ul>
//         </div>

//         {/* Opportunities */}
//         <div>
//           <h3 className="text-white font-semibold mb-2 text-[14px]">Opportunities</h3>
//           <ul className="space-y-1 text-xs">
//             <li><Link href="/jobs" className="hover:text-[#14A4F3]">Jobs</Link></li>
//             <li><Link href="/internship" className="hover:text-[#14A4F3]">Internship</Link></li>
//           </ul>
//         </div>

//         {/* Ecosystem */}
//         <div>
//           <h3 className="text-white font-semibold mb-2 text-[14px]">Ecosystem</h3>
//           <ul className="space-y-1 text-xs">
//             <li><Link href="/corporates" className="hover:text-[#14A4F3]">Corporates</Link></li>
//             <li><Link href="/universities" className="hover:text-[#14A4F3]">Universities</Link></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-white font-semibold mb-2 text-[14px]">Support</h3>
//           <ul className="space-y-1 text-xs">
//             <li><Link href="/enquiry" className="hover:text-[#14A4F3]">Enquiry Now</Link></li>
//             <li><Link href="/contact-us" className="hover:text-[#14A4F3]">Contact Us</Link></li>
//           </ul>
//         </div>
//       </div>

//       <hr className="border-gray-600" />

//       {/* Social Icons */}
//       <div className="max-w-7xl mx-auto flex justify-center gap-5 text-[18px] mt-4 mb-2 text-gray-300">
//         <FaFacebookF className="cursor-pointer hover:text-[#14A4F3]" />
//         <FaInstagram className="cursor-pointer hover:text-[#14A4F3]" />
//         <FaTwitter className="cursor-pointer hover:text-[#14A4F3]" />
//         <FaYoutube className="cursor-pointer hover:text-[#14A4F3]" />
//         <FaLinkedinIn className="cursor-pointer hover:text-[#14A4F3]" />
//         <FaEnvelope className="cursor-pointer hover:text-[#14A4F3]" />
//         <FaPhoneAlt className="cursor-pointer hover:text-[#14A4F3]" />
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-[10px] text-gray-400 max-w-7xl mx-auto pb-1">
//         <p>© {currentYear} Learners Digital. All rights reserved.</p>
//         <div className="flex justify-center gap-3 mt-1">
//           <Link href="/terms" className="hover:text-[#14A4F3]">Terms</Link>
//           <Link href="/privacy" className="hover:text-[#14A4F3]">Privacy</Link>
//           <Link href="/sitemap" className="hover:text-[#14A4F3]">Sitemap</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import {
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-20 py-8"
      style={{
        background: "linear-gradient(90deg, #0A2A38 0%,rgb(19, 97, 143) 50%, #0D76B1 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-300">

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-[15px]">Company</h3>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/about-us" className="hover:underline hover:text-[#14A4F3]">About Us</Link></li>
            <li><Link href="/our-team" className="hover:underline hover:text-[#14A4F3]">Our Team</Link></li>
          </ul>
        </div>

        {/* Opportunities */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-[15px]">Opportunities</h3>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/jobs" className="hover:underline hover:text-[#14A4F3]">Jobs</Link></li>
            <li><Link href="/internship" className="hover:underline hover:text-[#14A4F3]">Internship</Link></li>
          </ul>
        </div>

        {/* Ecosystem */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-[15px]">Ecosystem</h3>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/corporates" className="hover:underline hover:text-[#14A4F3]">Corporates</Link></li>
            <li><Link href="/universities" className="hover:underline hover:text-[#14A4F3]">Universities</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-[15px]">Support</h3>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/enquiry" className="hover:underline hover:text-[#14A4F3]">Enquiry Now</Link></li>
            <li><Link href="/contact-us" className="hover:underline hover:text-[#14A4F3]">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 mt-6" />

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto flex justify-center gap-6 text-lg mt-6 text-gray-300">
        <FaFacebookF className="cursor-pointer hover:text-[#14A4F3]" />
        <FaInstagram className="cursor-pointer hover:text-[#14A4F3]" />
        <FaTwitter className="cursor-pointer hover:text-[#14A4F3]" />
        <FaYoutube className="cursor-pointer hover:text-[#14A4F3]" />
        <FaLinkedinIn className="cursor-pointer hover:text-[#14A4F3]" />
        <FaEnvelope className="cursor-pointer hover:text-[#14A4F3]" />
        <FaPhoneAlt className="cursor-pointer hover:text-[#14A4F3]" />
      </div>

      {/* Copyright */}
      <div className="text-center text-[11px] text-gray-400 mt-4">
        © {currentYear} Learners Digital — All Rights Reserved.
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/terms" className="hover:text-[#14A4F3] hover:underline">Terms</Link>
          <Link href="/privacy" className="hover:text-[#14A4F3] hover:underline">Privacy</Link>
          <Link href="/sitemap" className="hover:text-[#14A4F3] hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}