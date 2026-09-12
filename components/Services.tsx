import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="section-shell py-5 md:py-9">
      <SectionTitle title="Services" subtitle="What I can do for you" />
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {services.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="
             min-h-[140px]
              rounded-lg
               border
                border-purple-500/20
                bg-gradient-to-br
                from-[#0b1938]
                to-[#050e24]
                 p-4
                  text-center
                shadow-[0_0_10px_rgba(80,40,180,0.05)]
                transition-all
                duration-300
                hover:border-purple-500/50
                 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                 hover:-translate-y-1
                 cursor-pointer"
          >
            <Icon className="mx-auto mb-3 text-4xl text-purple-400" />
            <h3 className="text-[16px] font-medium">{title}</h3>
            <p className="mt-2 text-[14px] leading-5 text-slate-400">{text}</p>
          </div>
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
      <h2 className="text-[18px] font-medium">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500" />
        {title}
      </h2>
      <p className="ml-4 text-[16px] text-slate-500">{subtitle}</p>
    </div>
  );
}
