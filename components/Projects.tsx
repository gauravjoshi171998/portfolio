"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEye, FaArrowRight, FaChevronUp  } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import { useState } from "react";

export default function Projects() {
  const[allProjects, setAllProjects] = useState(false)
  const handleProjects = allProjects ? projects : projects.slice(0,4);
  return (
    <section id="projects" className="section-shell py-5 md:py-9">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-medium">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500" />
            Featured Projects
          </h2>
          <p className="ml-4 text-[16px] text-slate-500">
            Some of my recent work
          </p>
        </div>
        <button
          className="hidden  items-center gap-2 text-[16px] text-purple-400 sm:flex"
          onClick={() => setAllProjects(!allProjects)}
        >
          {allProjects ? "Less Projects" : "View All Projects"}
          {allProjects ? <FaChevronUp  /> : <FaArrowRight /> } 
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {handleProjects.map((project) => (
          <article
            key={project.title}
            className="glow-border overflow-hidden rounded-lg bg-gradient-to-br from-[#0b1938] to-[#050e24]"
          >
            <div className="relative h-50 bg-[#06102a]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-[16px] font-medium">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#09204a] px-3 py-1.5 text-[14px] text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <Link
                  href={project.url}
                  className="gradient-button flex items-center gap-1 rounded-full px-4 py-2 text-[14px]"
                >
                  Live Demo <FaEye />
                </Link>
                {/* <Link
                  href="#contact"
                  className="flex items-center gap-1 rounded border border-slate-600 px-2.5 py-1.5 text-[12px]"
                >
                  <FaGithub /> GitHub
                </Link> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
