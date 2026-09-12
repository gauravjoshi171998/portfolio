"use client";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell grid gap-7 py-5 md:py-9 lg:grid-cols-2"
    >
      <div>
        <h2 className="text-xl font-medium">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500" />
          Contact Me
        </h2>
        <p className="ml-4 text-[16px] text-slate-500">Let’s work together</p>
        <p className="mt-4 max-w-md text-[16px] leading-6 text-slate-400">
          Have a project in mind? Let’s turn your ideas into reality.
        </p>
        <div className="mt-6 grid gap-3 text-[16px] text-slate-300">
          <Info icon={<FaEnvelope />} value="gauravjoshi.dev@gmail.com" />
          <Info icon={<FaPhoneAlt />} value="+91 12345 67890" />
          <Info icon={<FaMapMarkerAlt />} value="India" />
        </div>
      </div>

      <form
        className="glow-border grid gap-2 rounded-xl bg-[#07132f]/80 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="rounded border border-slate-700 bg-[#050e24] px-3 py-2.5 text-[16px] outline-none focus:border-purple-500"
          placeholder="Your Name"
        />
        <input
          className="rounded border border-slate-700 bg-[#050e24] px-3 py-2.5 text-[16px] outline-none focus:border-purple-500"
          type="email"
          placeholder="Your Email"
        />
        <select
          className="rounded border border-slate-700 bg-[#050e24] px-3 py-2.5 text-[16px] text-slate-300 outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Project Type
          </option>
          <option>Website</option>
          <option>React App</option>
          <option>WordPress</option>
        </select>
        <textarea
          className="rounded border border-slate-700 bg-[#050e24] px-3 py-2.5 text-[16px] outline-none focus:border-purple-500"
          rows={5}
          placeholder="Your Message"
        />
        <button className="gradient-button mt-1 flex items-center justify-center gap-2 rounded py-2.5 text-[16px] font-semibold">
          Send Message <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}

function Info({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-purple-400">{icon}</span>
      {value}
    </div>
  );
}
