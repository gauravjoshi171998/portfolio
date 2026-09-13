import Link from "next/link";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid h-16 grid-cols-5 border-t border-white/10 bg-[#030817]/95 backdrop-blur-xl md:hidden">

      {/* Home */}
      <Link
        href="#home"
        className="flex flex-col items-center justify-center gap-1 text-[11px] text-purple-400 transition-colors"
      >
        <FaHome className="text-[16px]" />
        <span>Home</span>
      </Link>

      {/* Skills */}
      <Link
        href="#skills"
        className="flex flex-col items-center justify-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-purple-400"
      >
        <FaCode className="text-[16px]" />
        <span>Skills</span>
      </Link>

      {/* Services */}
      <Link
        href="#services"
        className="flex flex-col items-center justify-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-purple-400"
      >
        <FaBriefcase className="text-[16px]" />
        <span>Services</span>
      </Link>

      {/* Projects */}
      <Link
        href="#projects"
        className="flex flex-col items-center justify-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-purple-400"
      >
        <FaFolderOpen className="text-[16px]" />
        <span>Projects</span>
      </Link>

      {/* Contact */}
      <Link
        href="#contact"
        className="flex flex-col items-center justify-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-purple-400"
      >
        <FaEnvelope className="text-[16px]" />
        <span>Contact</span>
      </Link>

    </nav>
  );
}