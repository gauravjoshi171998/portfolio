import { process } from "@/data/portfolio";

export default function Process() {
  return (
    <section id="process" className="section-shell py-9">
      <SectionTitle
        title="My Process"
        subtitle="How I turn your idea into reality"
      />

       <div className="mt-4 grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {process.map(({ number, title, text }, index) => (
          <div>
            {/* Card */}
            <div
            key={number}

              className="
                min-h-[180px]
                w-full
                rounded-lg
                border
                border-purple-500/20
                bg-gradient-to-br
                from-[#0b1938]
                to-[#050e24]
                p-4
                shadow-[0_0_10px_rgba(80,40,180,0.05)]
                transition-all
                duration-300
                hover:border-purple-500/50
                 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                 hover:-translate-y-1
                 cursor-pointer
                  text-center
              "
            >
              {/* Number */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-purple-500
                  to-purple-700
                  text-[12px]
                  font-bold
                  text-white
                  shadow-[0_0_15px_rgba(168,85,247,0.45)]
                  mx-auto
                  mb-3
                "
              >
                {number}
              </div>

              {/* Content */}
                <h3 className="text-[16px] font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-2 text-[14px] leading-[1.4] text-slate-400">
                  {text}
                </p>
            </div>

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
      <h2 className="flex items-center text-[18px] font-semibold text-white">
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a329ff]" />
        {title}
      </h2>

      <p className="ml-3.5 mt-0.5 text-[16px] text-slate-500">{subtitle}</p>
    </div>
  );
}
