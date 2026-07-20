"use client";

import { motion } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Web design &amp; development agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Websites built to grow your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 max-w-lg text-lg leading-relaxed text-secondary"
          >
            We design and develop fast, modern websites that help ambitious
            businesses stand out online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.05]"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrowserFrame>
              <div className="bg-gradient-to-b from-[#101018] to-[#0c0c12] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-accent" />
                    <div className="h-2 w-16 rounded-full bg-white/15" />
                  </div>
                  <div className="hidden gap-4 sm:flex">
                    <div className="h-2 w-10 rounded-full bg-white/10" />
                    <div className="h-2 w-10 rounded-full bg-white/10" />
                    <div className="h-2 w-10 rounded-full bg-white/10" />
                  </div>
                  <div className="h-6 w-16 rounded-full bg-accent/80" />
                </div>

                <div className="mt-10 space-y-3">
                  <div className="h-4 w-4/5 rounded-full bg-white/25" />
                  <div className="h-4 w-3/5 rounded-full bg-white/25" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-2/3 rounded-full bg-white/10" />
                  <div className="h-2 w-1/2 rounded-full bg-white/10" />
                </div>
                <div className="mt-6 h-8 w-32 rounded-full bg-accent" />

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3"
                    >
                      <div className="h-5 w-5 rounded-full bg-accent/60" />
                      <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </BrowserFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-white/10 bg-surface-2/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs text-secondary">Conversion rate</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              +148%
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
