import { stats } from "@/lib/data";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="border-y border-white/[0.06] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Why Lumos</p>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for performance, from day one.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-secondary">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
