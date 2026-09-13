"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";

const links = [
  "Home",
  "Skills",
  "Services",
  "Projects",
  "Testimonials",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#00031c]/90 backdrop-blur-xl">
      <div className="section-shell flex h-[70px] items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/header-logo.png"
            alt="GJ logo"
            width={210}
            height={100}
            priority
            unoptimized
            className="object-contain"
          />
        </Link>

        <nav
          className={`${open ? "flex" : "hidden"} gj-header absolute left-0 right-0 top-[70px] flex-col gap-5 border-b border-white/10 bg-[#020719] p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[16px] font-light text-slate-300"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="gradient-button justify-center inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 text-[14px] font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]"
          >
            Contact <FaEnvelope />
          </Link>
        </nav>

        <button
          className="text-xl md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
