import Image from "next/image";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section-shell py-5 md:py-9">
      {/* About Header */}
      <div className="mb-4">
        <h2 className="flex items-center text-[18px] font-medium text-white">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a329ff]" />
          About Me
        </h2>

        <p className="ml-4 text-[16px] text-slate-500">Get to know me better</p>
      </div>

      {/* Main About Card */}
      <div className="glow-border overflow-hidden rounded-xl bg-gradient-to-br from-[#071735] to-[#030b1d] p-4">
        <div className="grid gap-5 md:grid-cols-[180px_1fr]">
          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-[100%] md:max-w-[180px]">
            <div className="relative aspect-square overflow-hidden rounded-xl border-[3px] border-purple-500/50 bg-[#07132f] shadow-[0_0_25px_rgba(163,41,255,0.18)]">
              <Image
                src="/images/my-photo.jpeg"
                alt="Gaurav Joshi - Frontend Developer"
                fill
                className="object-cover"
                sizes="180px"
              />

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="mb-2 text-xl font-semibold text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Gaurav Joshi
              </span>
            </h3>

            <p className="text-[15px] leading-[1.6] text-slate-400">
              I&apos;m a passionate Frontend Developer with 2+ years of
              experience building modern, responsive and user-friendly websites.
              I specialize in React.js, Next.js and modern web technologies to
              create high-performance digital experiences.
            </p>

            <InfoCard
              icon={<FaGraduationCap />}
              subtitle="Education: B.Tech in Computer Science from GN
              Group of Institute, with a strong foundation in software
              development and web technologies."
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              subtitle="Location: Based in Lucknow, India, and available for opportunities worldwide."
            />

              <div className="mt-2 flex items-center gap-1.5">
                <a
                  href="/images/Gaurav-Joshi-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-purple-500"
                >
                  Download CV  <FaDownload className="text-[13px] download-icon" />
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small Info Card */
function InfoCard({
  icon,
  subtitle,
}: {
  icon: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="flex gap-2 mt-2">
      <div className="flex mt-1 shrink-0 text-[14px] text-purple-400">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[15px] leading-[1.6] text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
