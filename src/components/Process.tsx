"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { processIcons } from "./icons";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Process</p>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A clear path from idea to launch.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-white/10 lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-accent lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => {
              const Icon = processIcons[step.icon];
              return (
                <Reveal key={step.title} delay={i * 0.12}>
                  <div className="relative">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-surface-1 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-6 text-xs font-medium text-secondary">
                      0{i + 1}
                    </p>
                    <h3 className="mt-1.5 text-lg font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
