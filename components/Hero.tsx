import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp, FaEye, FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="banner-bg">
    <section id="home" className="section-shell grid items-center gap-5 py-12 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07142d] px-3 py-1.5 text-[14px] text-slate-200">
          <i className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#22c55e]" />
          Available for Freelance Work
        </span>

        <p className="mt-5 text-xl font-semibold sm:text-2xl">Hi, I’m</p>
        <h1 className="mt-0 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          <span className="gradient-text">Gaurav Joshi</span>
          <br />
          Frontend Developer
        </h1>

        <p className="mt-5 max-w-xl leading-[1.6] text-[#fff] sm:text-[16px]">
          I build modern, responsive and user-friendly websites that help businesses grow and stand out.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 text-[14px] font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]">
            Hire Me <FaPaperPlane />
          </Link>
          <Link href="#projects" className="hover-button flex items-center gap-2 rounded-md border border-slate-600 px-5 py-2.5 text-[14px]">
            View My Work <FaEye />
          </Link>
        </div>

        <div className="mt-5 flex gap-2.5">
          {[FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope].map((Icon, i) => (
            <a key={i} href={i === 3 ? "mailto:gauravjoshi897@gmail.com" : "#"} className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-[#07122b] text-sm hover:border-purple-400">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}