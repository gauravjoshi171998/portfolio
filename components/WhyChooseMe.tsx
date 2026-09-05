import { whychooseme } from "@/data/portfolio";

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="section-shell py-9">
      <SectionTitle
        title="Why Choose Me"
        subtitle="Quality, creativity and reliable solutions"
      />

      <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-5">
        {whychooseme.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="
              group
              min-h-[90px]
              text-center
              rounded-lg
              border
              border-purple-500/20
              bg-gradient-to-br
              from-[#0b1938]
              to-[#050e24]
              px-4
              py-4
              shadow-md
              transition-all
              duration-300
              ease-in-out
              hover:-translate-y-1
              hover:border-purple-500/50
              hover:bg-[#0d1d42]
              hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
              cursor-pointer
            "
          >
            {/* Icon */}
            <div
              className="
                mx-auto
                mb-3
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-purple-600/20
                text-purple-400
                transition-all
                duration-300
                group-hover:bg-purple-500/30
                group-hover:text-purple-300
                group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
              "
            >
              <Icon className="text-xl" />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <h3 className="text-[16px] font-semibold leading-tight text-white">
                {title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.35] text-slate-400">
                {text}
              </p>
            </div>
          </article>
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
      <h2 className="flex items-center text-[18px] font-semibold text-white">
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a329ff]" />
        {title}
      </h2>

      <p className="ml-3.5 mt-0.5 text-[16px] text-slate-500">{subtitle}</p>
    </div>
  );
}
