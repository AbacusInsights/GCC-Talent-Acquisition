"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  // close menu when resized to larger screens
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ensure portal root exists & setup body padding for sticky header
  useEffect(() => {
    let root = document.getElementById("__drawer_root");
    if (!root) {
      root = document.createElement("div");
      root.id = "__drawer_root";
      document.body.appendChild(root);
    }

    // Add padding top so content never hides behind sticky header
    document.body.style.paddingTop = "72px";

    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);

  const navItems = [
    { label: "Corporates", href: "/Corporate" },
    { label: "Universities", href: "/University" },
    { label: "Opportunity", href: "/jobs" },
    { label: "About Us", href: "/About" },
    { label: "Contact Us", href: "/Contact" }
  ];

  return (
    <>
      {/* Sticky header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-[44px] h-[44px] rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                L
              </div>
              <span className="hidden sm:block font-semibold text-slate-900">Learners Digital</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-7 text-sm text-slate-600">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-black">{n.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/enquiry"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Enquiry Now
          </a>
        </div>
      </header>

      {/* Drawer Portal */}
      {open && (
        <DrawerLeft
          navItems={navItems}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}


/* -----------------------------------------
   LEFT-SIDE DRAWER COMPONENT (PORTAL)
----------------------------------------- */
function DrawerLeft({ onClose, navItems }) {
  // lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  const drawerContent = (
    <div className="fixed inset-0 z-50 flex">
      
      {/* Backdrop */}
      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer (LEFT SIDE) */}
      <div className="
        w-[280px] max-w-[85vw] h-full 
        bg-white shadow-xl 
        rounded-r-2xl 
        transform transition-transform duration-300 
        flex flex-col
        translate-x-0
      ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        {/* Branding */}
        <div className="flex items-center gap-3 p-5 mt-6">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold">
            L
          </div>
          <div className="font-semibold text-slate-900">Learners Digital</div>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2 mt-3 px-5">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={onClose}
              className="p-3 rounded-lg hover:bg-gray-50 text-gray-800"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="mt-auto p-5 flex gap-3">
          <a href="/login" className="text-gray-600 hover:text-black text-sm">Login</a>
          <a
            href="/enquiry"
            className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700"
          >
            Enquiry Now
          </a>
        </div>
      </div>
    </div>
  );

  const portalRoot = document.getElementById("__drawer_root") || document.body;
  return createPortal(drawerContent, portalRoot);
}
