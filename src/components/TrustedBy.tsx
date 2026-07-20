import { trustedBy } from "@/lib/data";
import { Reveal } from "./Reveal";

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-y border-white/[0.06] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-secondary">
            Trusted by ambitious teams
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="text-lg font-semibold tracking-tight text-secondary/50 grayscale transition-colors duration-300 hover:text-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
