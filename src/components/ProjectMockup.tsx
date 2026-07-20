type ProjectMockupProps = {
  variant: "dashboard" | "ecommerce" | "portfolio";
};

export function ProjectMockup({ variant }: ProjectMockupProps) {
  if (variant === "dashboard") {
    return (
      <div className="bg-gradient-to-b from-[#101018] to-[#0c0c12] p-5">
        <div className="flex gap-4">
          <div className="w-16 shrink-0 space-y-3 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
            <div className="h-2 w-full rounded-full bg-accent/60" />
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-full rounded-full bg-white/10" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2.5">
                  <div className="h-2 w-2/3 rounded-full bg-white/10" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/25" />
                </div>
              ))}
            </div>
            <div className="flex h-24 items-end gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-sm bg-accent/70"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "ecommerce") {
    return (
      <div className="bg-gradient-to-b from-[#101018] to-[#0c0c12] p-5">
        <div className="flex items-center justify-between">
          <div className="h-2 w-14 rounded-full bg-white/20" />
          <div className="flex gap-3">
            <div className="h-2 w-8 rounded-full bg-white/10" />
            <div className="h-2 w-8 rounded-full bg-white/10" />
            <div className="h-4 w-4 rounded-full bg-accent/60" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03]">
              <div className="aspect-square bg-gradient-to-br from-accent/25 to-white/[0.03]" />
              <div className="space-y-1.5 p-2">
                <div className="h-1.5 w-4/5 rounded-full bg-white/15" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#101018] to-[#0c0c12] p-5">
      <div className="flex items-center justify-between">
        <div className="h-2 w-12 rounded-full bg-white/20" />
        <div className="h-2 w-16 rounded-full bg-white/10" />
      </div>
      <div className="mt-8 space-y-3">
        <div className="h-5 w-3/4 rounded-full bg-white/25" />
        <div className="h-5 w-1/2 rounded-full bg-white/25" />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="aspect-video rounded-lg bg-gradient-to-br from-accent/30 to-white/[0.03]" />
        <div className="aspect-video rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
      </div>
    </div>
  );
}
