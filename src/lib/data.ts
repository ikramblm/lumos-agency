export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const trustedBy = [
  "Northwind",
  "Vellum",
  "Arcadia",
  "Solace",
  "Kestrel",
  "Meridian",
];

export const services = [
  {
    title: "Custom Website Development",
    description:
      "Bespoke, high-performance websites engineered from the ground up to match your brand and business goals.",
    icon: "code",
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages designed to turn visitors into customers, launched in days, not months.",
    icon: "layout",
  },
  {
    title: "Website Redesign",
    description:
      "Modernize an outdated site with a refined visual identity, faster performance, and clearer messaging.",
    icon: "refresh",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and monitoring so your site stays fast, secure, and always up to date.",
    icon: "shield",
  },
];

export const projects = [
  {
    slug: "arcadia-finance",
    name: "Arcadia Finance",
    category: "FinTech - Web App",
    variant: "dashboard" as const,
    summary: "A precision dashboard for a wealth management platform.",
    accent: "#4F6BFF",
    challenge:
      "Arcadia's legacy dashboard was slow, cluttered, and eroded client trust with dated visuals and confusing data hierarchies.",
    solution:
      "We rebuilt the product on a modern design system with a clear visual hierarchy, real-time data visualizations, and sub-second load times.",
    results: [
      "42% increase in daily active users",
      "3.1s faster average load time",
      "96 Lighthouse performance score",
    ],
    tags: ["Next.js", "TypeScript", "Data Visualization"],
  },
  {
    slug: "solace-retail",
    name: "Solace Retail",
    category: "E-Commerce",
    variant: "ecommerce" as const,
    summary: "A premium storefront built for a direct-to-consumer skincare brand.",
    accent: "#4F6BFF",
    challenge:
      "Solace needed a storefront that matched the premium feel of their product line while converting at scale across devices.",
    solution:
      "We designed a minimal, editorial storefront with fast checkout flows, rich product storytelling, and mobile-first performance.",
    results: [
      "58% lift in mobile conversion rate",
      "27% increase in average order value",
      "100/100 accessibility score",
    ],
    tags: ["Shopify Hydrogen", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "kestrel-studio",
    name: "Kestrel Studio",
    category: "Agency - Portfolio",
    variant: "portfolio" as const,
    summary: "An award-worthy portfolio site for a boutique design studio.",
    accent: "#4F6BFF",
    challenge:
      "Kestrel wanted a portfolio that felt as crafted as their client work, without sacrificing speed or clarity.",
    solution:
      "We created a restrained, typography-led portfolio with subtle motion, letting the studio's project work take center stage.",
    results: [
      "3x increase in qualified inbound leads",
      "1.2s time to interactive",
      "Featured on three design showcases",
    ],
    tags: ["Next.js", "Framer Motion", "Sanity CMS"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We start by understanding your business, audience, and goals to define a clear strategic brief.",
    icon: "search",
  },
  {
    title: "Design",
    description:
      "We craft a refined visual direction and interactive prototype grounded in your brand and users.",
    icon: "pen",
  },
  {
    title: "Develop",
    description:
      "We build a fast, accessible, production-ready site with clean, modern code and rigorous QA.",
    icon: "terminal",
  },
  {
    title: "Launch",
    description:
      "We deploy, monitor, and support your new site, ensuring a smooth transition and lasting performance.",
    icon: "rocket",
  },
];

export const stats = [
  { label: "Fast Loading", value: 98, suffix: "", prefix: "<", unit: "s" },
  { label: "Mobile First", value: 100, suffix: "%", prefix: "" },
  { label: "SEO Optimized", value: 95, suffix: "+", prefix: "" },
  { label: "Secure Development", value: 24, suffix: "/7", prefix: "" },
];

export const testimonials = [
  {
    name: "Elena Marsh",
    role: "CEO, Arcadia Finance",
    quote:
      "Lumos didn't just redesign our site, they rebuilt how our clients perceive us. The attention to detail is on another level.",
    initials: "EM",
  },
  {
    name: "James Whitfield",
    role: "Founder, Solace Retail",
    quote:
      "Every interaction feels intentional. Our conversion rate has never been higher, and the site still feels effortless to use.",
    initials: "JW",
  },
  {
    name: "Priya Nandan",
    role: "Creative Director, Kestrel Studio",
    quote:
      "Working with Lumos felt like working with an in-house team that genuinely cared about the outcome, not just the deliverable.",
    initials: "PN",
  },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most landing pages take 1-2 weeks, while full custom websites typically take 4-8 weeks depending on scope, content readiness, and integrations.",
  },
  {
    question: "What is included in website maintenance?",
    answer:
      "Ongoing maintenance includes security updates, performance monitoring, content updates, uptime monitoring, and monthly reporting.",
  },
  {
    question: "Do you work with existing brand guidelines?",
    answer:
      "Yes. We can design within an existing brand system, or help evolve your visual identity as part of a redesign engagement.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "We specialize in Next.js and React for custom builds, and also work with Shopify, Webflow, and headless CMS platforms depending on your needs.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Every project includes a 30-day post-launch support window, with optional maintenance plans available for continued support.",
  },
];
