import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
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
  return (
    <footer className="border-t border-white/10 bg-[#020815]">
      <div className="section-shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="#home" className="flex items-center gap-2">
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
          <p className="mt-3 max-w-xs text-[16px] leading-5 text-slate-500">
            Building fast, responsive and modern web experiences.
          </p>
          <div className="mt-4 flex gap-2">
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

        <div>
          <h4 className="text-[18px] font-medium">Quick Links</h4>
          {["Home", "Skills", "Services", "Projects", "Contact"].map((x) => (
            <Link
              key={x}
              href={`#${x.toLowerCase()}`}
              className="mt-2 block text-[16px] text-slate-500"
            >
              {x}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="text-[18px] font-medium">Technologies</h4>
          {[
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Node.js",
          ].map((x) => (
            <span key={x} className="mt-2 block text-[16px] text-slate-500">
              {x}
            </span>
          ))}
        </div>

        <div>
          <h4 className="text-[18px] font-medium">Let’s Work Together</h4>
          <p className="mt-2 text-[16px] leading-6 text-slate-500">
            Have a project in mind? Let’s turn your ideas into reality.
          </p>
          {/* <Link
            href="#contact"
            className="gradient-button mt-3 inline-flex items-center gap-2 rounded px-3 py-2 text-[16px]"
          >
            Hire Me <FaPaperPlane />
          </Link> */}
          <Link
            href="#contact"
            className="inline-flex mt-3 items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-[14px] font-medium text-white transition hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]"
          >
            Hire Me <FaPaperPlane />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-[12px] text-slate-600">
        © 2026 Gaurav Joshi. All rights reserved.
      </div>
    </footer>
  );
}
