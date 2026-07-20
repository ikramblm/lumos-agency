import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

export function BrowserFrame({ children, url = "lumos.agency", className = "" }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-1 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-surface-2 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto flex w-2/3 max-w-[220px] items-center justify-center rounded-full bg-white/[0.04] px-3 py-1 sm:max-w-xs">
          <span className="truncate text-[11px] text-secondary">{url}</span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
