import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-9">
      <SectionTitle title="My Skills" subtitle="Technologies I work with" />
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {skills.map(({ name, icon: Icon, color, url }) => (
          <a
            href={url}
            key={name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name} official website`}
            className="flex h-[120px] flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#0b1938] to-[#050e24] shadow-[0_0_10px_rgba(80,40,180,0.05)]
                transition-all
                border
                border-purple-500/20
                duration-300
                hover:border-purple-500/50
                 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                 hover:-translate-y-1"
          >
            <Icon className={`text-5xl ${color}`} />
            <b className="text-[16px] font-medium text-slate-200">{name}</b>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="text-[18px] font-semibold">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a329ff]" />
        {title}
      </h2>
      <p className="ml-4 text-[16px] text-slate-500">{subtitle}</p>
    </div>
  );
}
