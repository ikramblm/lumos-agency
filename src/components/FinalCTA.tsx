import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.16] blur-[130px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&rsquo;s build something exceptional.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-secondary">
            Tell us about your project and we&rsquo;ll get back to you within
            one business day.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="mailto:hello@lumos.agency"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
