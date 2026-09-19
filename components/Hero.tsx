"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEye,
  FaPaperPlane,
} from "react-icons/fa";

export default function Hero() {
  const roles = ["Frontend Developer", "Backend Developer"];
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/gauravjoshi171998",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/gaurav-joshi-47ab12250/",
      label: "LinkedIn",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/9118146726",
      label: "WhatsApp",
    },
    {
      icon: FaEnvelope,
      href: "mailto:gauravjoshi897@gmail.com",
      label: "Email",
    },
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));

        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <div className="banner-bg">
      <section
        id="home"
        className="section-shell grid items-center gap-5 py-12"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07142d] px-3 py-1.5 text-[14px] text-slate-200">
            <i className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#22c55e]" />
            Available for Freelance Work
          </span>
          <p className="mt-5 text-xl font-semibold sm:text-2xl">Hi, I’m</p>
          <h1 className="mt-2 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl min-h-[2.16em] block">
            <span className="gradient-text">Gaurav Joshi</span>
            <br />
            {displayText}
          </h1>

          <p className="mt-5 max-w-xl leading-[1.6] text-[#fff] sm:text-[16px]">
            I build modern, responsive and user-friendly websites that help
            businesses grow and stand out.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-[14px] font-medium text-white transition hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]"
            >
              Hire Me <FaPaperPlane />
            </Link>

            <Link
              href="#projects"
              className="hover-button flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2.5 text-[14px]"
            >
              View My Work <FaEye />
            </Link>
          </div>

          <div className="mt-5 flex gap-2.5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-[#07122b] text-sm transition hover:border-purple-400 hover:text-purple-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
