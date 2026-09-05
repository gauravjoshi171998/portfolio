# Gaurav Joshi — Next.js + Tailwind Portfolio

This project is structured for the Next.js App Router and Tailwind CSS.

## Structure

```text
gaurav-joshi-next-tailwind/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── MobileNav.tsx
├── data/
│   └── portfolio.ts
├── public/
│   └── images/
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Next.js.

## Important

The supplied developer artwork is already included as:

`public/images/developer-hero.png`

Replace the four project image placeholders in `public/images/` with your actual screenshots. The project data is centralized in `data/portfolio.ts`.

The design uses Tailwind CSS and the Poppins-style typography/layout approach from the supplied mockup.