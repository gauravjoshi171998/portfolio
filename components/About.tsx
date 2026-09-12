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
    <section id="about" className="section-shell py-9">
      {/* About Header */}
      <div className="mb-4">
        <h2 className="flex items-center text-xl font-semibold text-white">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a329ff]" />
          About Me
        </h2>

        <p className="ml-4 text-[16px] text-slate-500">
          Get to know me better
        </p>
      </div>

      {/* Main About Card */}
      <div className="glow-border overflow-hidden rounded-xl bg-gradient-to-br from-[#071735] to-[#030b1d] p-4">
        <div className="grid items-center gap-5 lg:grid-cols-[180px_1fr]">
          
          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-[180px]">
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

            <p className="max-w-3xl text-[15px] leading-[1.6] text-slate-400">
              I&apos;m a passionate Frontend Developer with 2+ years of
              experience building modern, responsive and user-friendly
              websites. I specialize in React.js, Next.js and modern web
              technologies to create high-performance digital experiences.
            </p>

           {/* About Content */}
          <div className="min-w-0 flex-1">
            {/* Heading */}

            {/* Bottom Row */}
            <div className="mt-2 flex items-center gap-1.5">
              {/* Experience */}
              {/* <InfoCard
                icon={<FaBriefcase />}
                title="2+ Years"
                subtitle="Experience"
              /> */}

              {/* Education */}
              <InfoCard
                icon={<FaGraduationCap />}
                title="B.Tech CSE"
                subtitle="GN Group of Institute"
              />

              {/* Location */}
              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Lucknow, India"
                subtitle="Available Worldwide"
              />
               {/* Availability */}
              {/* <InfoCard
                icon={<FaClock />}
                title="Freelance"
                subtitle="Available for Work"
              /> */}

              {/* Download CV */}
              <a
                href="/Gaurav-Joshi-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 text-[14px] font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]"
              >
                Download CV
                <FaDownload />
              </a>

            </div>
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
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-slate-800 bg-[#07132f]/80 px-3 py-2">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-600/15 text-[12px] text-purple-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="truncate text-[15px] font-semibold text-white">
          {title}
        </p>

        <p className="truncate text-[14px] text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}