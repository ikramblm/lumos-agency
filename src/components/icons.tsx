type IconProps = {
  className?: string;
};

const base = "1.5";

export function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 6 3 12l6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LayoutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth={base} />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth={base} />
      <path d="M8.5 9.5v10" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
      />
      <path d="M17.5 3.5v3.5H14M6.5 20.5V17H10" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="m9.25 12.25 1.9 1.9 3.6-3.9" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth={base} />
      <path d="m19.5 19.5-4.3-4.3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function PenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20 4.7 16.2 15.5 5.4a1.8 1.8 0 0 1 2.6 0l.5.5a1.8 1.8 0 0 1 0 2.6L7.8 19.3 4 20Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M13.7 7.2 16.8 10.3" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth={base} />
      <path d="m7.5 10 3 2.5-3 2.5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 15h4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c2.8 1.4 4.5 4.3 4.5 8.2 0 1.7-.3 3-.8 4.1l-3.7 2-3.7-2c-.5-1.1-.8-2.4-.8-4.1C7.5 7.3 9.2 4.4 12 3Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="1.6" stroke="currentColor" strokeWidth={base} />
      <path d="M9 17.5 7.5 21l3-1.3M15 17.5l1.5 3.5-3-1.3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth={base} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={base} />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M7.8 10v6.2M7.8 7.6v.02" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M11.6 16.2V10m0 3c0-1.8 1-3 2.5-3s2.3 1 2.3 3v3.2" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export const serviceIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  code: CodeIcon,
  layout: LayoutIcon,
  refresh: RefreshIcon,
  shield: ShieldIcon,
};

export const processIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  search: SearchIcon,
  pen: PenIcon,
  terminal: TerminalIcon,
  rocket: RocketIcon,
};
