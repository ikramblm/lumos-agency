"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectMockup } from "./ProjectMockup";
import { BrowserFrame } from "./BrowserFrame";
import { ArrowUpRightIcon, CloseIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FeaturedProjects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = projects.find((p) => p.slug === activeSlug) ?? null;

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSlug(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Featured Projects</p>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Work that speaks for itself.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <button
                type="button"
                onClick={() => setActiveSlug(project.slug)}
                className="group block w-full text-left"
                aria-haspopup="dialog"
              >
                <div className="transition-all duration-300 ease-out group-hover:-translate-y-2">
                  <BrowserFrame url={`${project.slug.split("-")[0]}.com`}>
                    <ProjectMockup variant={project.variant} />
                  </BrowserFrame>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-secondary">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 text-lg font-medium text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-secondary transition-colors group-hover:border-accent/50 group-hover:text-accent">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <CaseStudyModal project={active} onClose={() => setActiveSlug(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto px-4 py-10 sm:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.button
        aria-label="Close case study"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-surface-1 p-7 shadow-2xl sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-secondary transition-colors hover:text-foreground"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <p className="text-xs uppercase tracking-wide text-accent">
          {project.category}
        </p>
        <h3 id="case-study-title" className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 text-secondary">{project.summary}</p>

        <div className="mt-8 rounded-xl border border-white/[0.06]">
          <BrowserFrame url={`${project.slug.split("-")[0]}.com`}>
            <ProjectMockup variant={project.variant} />
          </BrowserFrame>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-medium text-foreground">The Challenge</h4>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground">Our Solution</h4>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-medium text-foreground">Results</h4>
          <ul className="mt-3 space-y-2">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-2.5 text-sm text-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
