import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid h-16 grid-cols-4 border-t border-white/10 bg-[#030817]/95 backdrop-blur-xl md:hidden">
      <Link
        href="#home"
        className="flex flex-col items-center justify-center text-xs text-purple-400"
      >
        <span className="text-lg">⌂</span>
        Home
      </Link>

      <Link
        href="#skills"
        className="flex flex-col items-center justify-center text-xs text-slate-400"
      >
        <span className="text-lg">◈</span>
        Skills
      </Link>

      <Link
        href="#projects"
        className="flex flex-col items-center justify-center text-xs text-slate-400"
      >
        <span className="text-lg">▣</span>
        Projects
      </Link>

      <Link
        href="#contact"
        className="flex flex-col items-center justify-center text-xs text-slate-400"
      >
        <span className="text-lg">⌕</span>
        Contact
      </Link>
    </nav>
  );
}