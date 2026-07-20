import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Testimonials</p>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted by teams who care about craft.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-sm font-medium text-accent">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-xs text-secondary">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
