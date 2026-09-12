const testimonials = [
  [
    "Rahul Sharma",
    "Business Owner",
    "Gaurav delivered an amazing website for our business. Great communication and excellent work!",
  ],
  [
    "Priya Verma",
    "Startup Founder",
    "Highly skilled in React and modern technologies. Will definitely work again!",
  ],
  [
    "Amit Patel",
    "E-Commerce Owner",
    "Excellent developer with great attention to detail. The website looks modern, fast, and works perfectly on mobile.",
  ],
  [
    "Neha Singh",
    "Marketing Manager",
    "Gaurav understood our requirements quickly and delivered exactly what we needed. Very professional and responsive.",
  ],
  [
    "Arjun Mehta",
    "Product Manager",
    "Really impressed with the quality of work. The React application was clean, responsive, and easy to use.",
  ],
  [
    "Sneha Kapoor",
    "Business Founder",
    "Great experience working with Gaurav. He created a beautiful website and was always available for improvements.",
  ],
  [
    "Vikash Kumar",
    "Agency Owner",
    "Gaurav is a talented frontend developer. He transformed our design into a smooth and responsive website.",
  ],
  [
    "Ananya Gupta",
    "Small Business Owner",
    "Very professional work and excellent communication. The final website exceeded our expectations.",
  ],
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell py-5 md:py-9">
      <h2 className="text-xl font-medium">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500" />
        Testimonials
      </h2>
      <p className="ml-4 text-[16px] text-slate-500">What clients say</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map(([name, role, quote]) => (
          <article
            key={name}
            className="glow-border rounded-lg bg-gradient-to-br from-[#0b1938] to-[#050e24] p-5"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-[16px] font-medium">
              {name[0]}
            </div>
            <p className="mt-3 text-[16px] leading-6 text-slate-300">
              “{quote}”
            </p>
            <strong className="mt-2 block text-[16px] font-medium">{name}</strong>
            <small className="text-[16px] text-slate-500">{role}</small>
            <div className="mt-2 text-[16px] text-yellow-400">★★★★★</div>
          </article>
        ))}
      </div>
    </section>
  );
}
