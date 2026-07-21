import Image from "next/image";
import { nav } from "@/lib/data";
import { InstagramIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image src="/logo.jpg" alt="Lumos" fill sizes="36px" className="object-cover" />
            </span>
            <span className="text-[15px] font-semibold tracking-wide text-foreground">
              LUMOS
            </span>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-secondary transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@lumos.agency"
              className="text-sm text-secondary transition-colors hover:text-foreground"
            >
              hello@lumos.agency
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumos on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-secondary transition-colors hover:border-accent/40 hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lumos on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-secondary transition-colors hover:border-accent/40 hover:text-accent"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-secondary/70">
          &copy; {new Date().getFullYear()} Lumos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
