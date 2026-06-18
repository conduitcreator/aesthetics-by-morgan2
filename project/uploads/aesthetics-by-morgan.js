import { jsx as e, jsxs as r, Fragment as f } from "react/jsx-runtime";
import * as b from "react";
function C({ children: t, className: n = "", canvas: a = !1 }) {
  const l = ["abm-root", a ? "bg-ivory" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: l, children: t });
}
function x({
  tone: t = "espresso",
  showWordmark: n = !0,
  subtitle: a = "San Antonio · content studio",
  href: l,
  className: i = ""
}) {
  const s = [
    "flex items-center gap-3 no-underline leading-none",
    t === "ivory" ? "text-ivory" : "text-espresso",
    i
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ r(f, { children: [
    /* @__PURE__ */ r("svg", { viewBox: "0 0 48 48", className: "h-11 w-11 flex-none", "aria-hidden": "true", children: [
      /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "22.5", fill: "none", stroke: "#C08566", strokeWidth: "1" }),
      /* @__PURE__ */ e("circle", { cx: "24", cy: "6.5", r: "1.6", fill: "#C08566" }),
      /* @__PURE__ */ e(
        "text",
        {
          x: "24",
          y: "24",
          textAnchor: "middle",
          dominantBaseline: "central",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "18",
          letterSpacing: "0.5",
          fill: "currentColor",
          children: "abm"
        }
      )
    ] }),
    n ? /* @__PURE__ */ r("span", { className: "block", children: [
      /* @__PURE__ */ r("span", { className: "block font-display text-2xl md:text-[1.625rem] tracking-wide", children: [
        "Aesthetics ",
        /* @__PURE__ */ e("span", { className: "italic", children: "by" }),
        " Morgan"
      ] }),
      a ? /* @__PURE__ */ e("span", { className: "block abm-eyebrow mt-1", children: a }) : null
    ] }) : null
  ] });
  return l ? /* @__PURE__ */ e("a", { href: l, className: s, "aria-label": "Aesthetics by Morgan, home", children: c }) : /* @__PURE__ */ e("span", { className: s, children: c });
}
function h({ variant: t = "primary", href: n, className: a = "", children: l, ...i }) {
  const s = [t === "primary" ? "abm-btn-primary" : "abm-btn-secondary", a].filter(Boolean).join(" ");
  return n ? /* @__PURE__ */ e("a", { href: n, className: s, children: l }) : /* @__PURE__ */ e("button", { className: s, ...i, children: l });
}
function S({ tone: t = "taupe", className: n = "", children: a, ...l }) {
  const i = ["abm-eyebrow", t === "blush" ? "text-blush" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("p", { className: i, ...l, children: a });
}
function A({ variant: t = "blush", className: n = "", children: a, ...l }) {
  const i = [t === "linen" ? "abm-tag-linen" : "abm-tag", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: i, ...l, children: a });
}
const p = {
  lg: "text-5xl sm:text-6xl md:text-hero leading-[1.05]",
  md: "text-h2 md:text-5xl leading-tight",
  sm: "text-h3 md:text-h2 leading-snug"
};
function N({
  roman: t,
  italic: n,
  eyebrow: a,
  as: l = "h2",
  size: i = "md",
  inlineItalic: s = !1,
  align: c = "left",
  className: m = ""
}) {
  const d = l, o = p[i];
  return /* @__PURE__ */ r("div", { className: [c === "center" ? "text-center" : "", m].filter(Boolean).join(" "), children: [
    a ? /* @__PURE__ */ e("p", { className: "abm-eyebrow mb-5", children: a }) : null,
    /* @__PURE__ */ r(d, { className: o, children: [
      /* @__PURE__ */ e("span", { className: "abm-lockup-roman", children: t }),
      n ? s ? /* @__PURE__ */ r(f, { children: [
        " ",
        /* @__PURE__ */ e("span", { className: "abm-lockup-italic", children: n })
      ] }) : /* @__PURE__ */ e("span", { className: "abm-lockup-italic block", children: n }) : null
    ] })
  ] });
}
function v({ surface: t = "linen", lift: n = !1, className: a = "", children: l, ...i }) {
  const s = [
    t === "ivory" ? "abm-card-ivory" : "abm-card",
    n ? "abm-lift" : "",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: s, ...i, children: l });
}
function y({ children: t, className: n = "" }) {
  return /* @__PURE__ */ e("div", { className: ["abm-accordion", n].filter(Boolean).join(" "), children: t });
}
function g({ title: t, children: n, defaultOpen: a = !1, className: l = "" }) {
  return /* @__PURE__ */ r(
    "details",
    {
      className: ["abm-acc border-t border-greige/70 py-4", l].filter(Boolean).join(" "),
      open: a,
      children: [
        /* @__PURE__ */ r("summary", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ e("span", { className: "abm-acc-title font-body font-medium", children: t }),
          /* @__PURE__ */ e("span", { className: "abm-acc-icon text-xl leading-none", "aria-hidden": "true", children: "+" })
        ] }),
        /* @__PURE__ */ e("div", { className: "mt-3 text-sm text-taupe-ink", children: n })
      ]
    }
  );
}
function P({
  eyebrow: t,
  title: n,
  description: a,
  image: l,
  tiers: i,
  footnote: s,
  ctaLabel: c = "Enquire",
  ctaHref: m = "#contact",
  className: d = ""
}) {
  return /* @__PURE__ */ r(v, { surface: "ivory", lift: !0, className: ["flex flex-col", d].filter(Boolean).join(" "), children: [
    l ? /* @__PURE__ */ e("div", { className: "abm-media-frame relative -mx-7 -mt-7 mb-6 aspect-[4/3] overflow-hidden rounded-t-card", children: /* @__PURE__ */ e(
      "img",
      {
        src: l.src,
        alt: l.alt,
        className: "abm-media absolute inset-0 h-full w-full object-cover"
      }
    ) }) : null,
    t ? /* @__PURE__ */ e("p", { className: "abm-eyebrow mb-3", children: t }) : null,
    /* @__PURE__ */ e("h3", { className: "text-h3 mb-2", children: n }),
    a ? /* @__PURE__ */ e("p", { className: "text-taupe-ink", children: a }) : null,
    i && i.length > 0 ? /* @__PURE__ */ e(y, { className: "mt-6", children: i.map((o, u) => /* @__PURE__ */ e(g, { title: o.title, defaultOpen: o.defaultOpen, children: o.body }, u)) }) : null,
    s ? /* @__PURE__ */ e("p", { className: "mt-6 text-sm text-taupe-ink", children: s }) : null,
    /* @__PURE__ */ e(h, { variant: "secondary", href: m, className: "mt-7 self-start text-sm !py-2.5 !px-5", children: c })
  ] });
}
function T({ quote: t, name: n, detail: a, lift: l = !0, className: i = "" }) {
  const s = ["abm-card", l ? "abm-lift" : "", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("figure", { className: s, children: [
    /* @__PURE__ */ r("p", { className: "font-display text-2xl leading-snug text-espresso", children: [
      "“",
      t,
      "”"
    ] }),
    /* @__PURE__ */ r("figcaption", { className: "mt-6", children: [
      /* @__PURE__ */ e("p", { className: "font-body font-medium", children: n }),
      a ? /* @__PURE__ */ e("p", { className: "text-sm text-taupe-ink", children: a }) : null
    ] })
  ] });
}
function E({
  eyebrow: t,
  roman: n,
  italic: a,
  body: l,
  ctaLabel: i,
  ctaHref: s = "#contact",
  surface: c = "blush",
  className: m = ""
}) {
  return /* @__PURE__ */ e("section", { className: [c === "linen" ? "bg-linen" : "bg-blush", m].filter(Boolean).join(" "), children: /* @__PURE__ */ r("div", { className: "mx-auto w-full max-w-6xl px-6 md:px-10 py-20 md:py-24 text-center", children: [
    /* @__PURE__ */ e(N, { eyebrow: t, roman: n, italic: a, inlineItalic: !0, align: "center" }),
    l ? /* @__PURE__ */ e("p", { className: "mt-6 max-w-xl mx-auto text-espresso/70", children: l }) : null,
    /* @__PURE__ */ e(h, { href: s, className: "mt-9", children: i })
  ] }) });
}
const w = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];
function $({
  links: t = w,
  ctaLabel: n = "Book a call",
  ctaHref: a = "#contact",
  transparent: l = !1,
  className: i = ""
}) {
  const [s, c] = b.useState(!1), m = l ? "text-ivory" : "text-espresso";
  return /* @__PURE__ */ e("header", { className: ["w-full", l ? "" : "bg-ivory border-b border-greige/70", i].filter(Boolean).join(" "), children: /* @__PURE__ */ r("nav", { "aria-label": "Primary", children: [
    /* @__PURE__ */ r("div", { className: "mx-auto w-full max-w-6xl px-6 md:px-10 flex items-center justify-between py-5", children: [
      /* @__PURE__ */ e(x, { tone: l ? "ivory" : "espresso", href: "#top" }),
      /* @__PURE__ */ r("div", { className: "hidden md:flex items-center gap-9", children: [
        t.map((o) => /* @__PURE__ */ e(
          "a",
          {
            href: o.href,
            className: `font-body text-sm tracking-wide no-underline transition-colors hover:text-clay ${m}`,
            children: o.label
          },
          o.href
        )),
        /* @__PURE__ */ e(h, { href: a, className: "text-sm !py-2.5 !px-5", children: n })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: `md:hidden p-2 -mr-2 ${m}`,
          "aria-label": s ? "Close menu" : "Open menu",
          "aria-expanded": s,
          onClick: () => c((o) => !o),
          children: /* @__PURE__ */ e("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", "aria-hidden": "true", children: s ? /* @__PURE__ */ r(f, { children: [
            /* @__PURE__ */ e("line", { x1: "5", y1: "5", x2: "19", y2: "19" }),
            /* @__PURE__ */ e("line", { x1: "19", y1: "5", x2: "5", y2: "19" })
          ] }) : /* @__PURE__ */ r(f, { children: [
            /* @__PURE__ */ e("line", { x1: "3", y1: "7", x2: "21", y2: "7" }),
            /* @__PURE__ */ e("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
            /* @__PURE__ */ e("line", { x1: "3", y1: "17", x2: "21", y2: "17" })
          ] }) })
        }
      )
    ] }),
    s ? /* @__PURE__ */ e("div", { className: "md:hidden bg-ivory border-t border-greige/70", children: /* @__PURE__ */ r("div", { className: "mx-auto w-full max-w-6xl px-6 md:px-10 flex flex-col py-4", children: [
      t.map((o) => /* @__PURE__ */ e(
        "a",
        {
          href: o.href,
          className: "font-body text-sm py-3 text-espresso no-underline",
          onClick: () => c(!1),
          children: o.label
        },
        o.href
      )),
      /* @__PURE__ */ e(h, { href: a, className: "mt-2 w-full", children: n })
    ] }) }) : null
  ] }) });
}
const j = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy.html" }
];
function F({
  tagline: t = "Content that captures. Strategy that converts.",
  nav: n = j,
  instagram: a = { handle: "@aestheticsbymorgan.rn", href: "https://instagram.com/aestheticsbymorgan.rn" },
  email: l = "morgan@bartonstreetmarketing.com",
  location: i = "San Antonio, TX · plus remote",
  className: s = ""
}) {
  return /* @__PURE__ */ e("footer", { className: ["bg-espresso text-ivory", s].filter(Boolean).join(" "), children: /* @__PURE__ */ r("div", { className: "mx-auto w-full max-w-6xl px-6 md:px-10 py-16", children: [
    /* @__PURE__ */ r("div", { className: "grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ e(x, { tone: "ivory", subtitle: null }),
        /* @__PURE__ */ e("p", { className: "mt-4 max-w-xs text-ivory/70", children: t })
      ] }),
      /* @__PURE__ */ r("nav", { className: "md:justify-self-center", "aria-label": "Footer", children: [
        /* @__PURE__ */ e("p", { className: "abm-eyebrow text-blush mb-4", children: "Explore" }),
        /* @__PURE__ */ e("ul", { className: "space-y-2.5", children: n.map((c) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: c.href, className: "text-ivory/85 no-underline hover:text-clay", children: c.label }) }, c.href)) })
      ] }),
      /* @__PURE__ */ r("div", { className: "md:justify-self-end", children: [
        /* @__PURE__ */ e("p", { className: "abm-eyebrow text-blush mb-4", children: "Connect" }),
        /* @__PURE__ */ r("ul", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: a.href, className: "text-ivory/85 no-underline hover:text-clay", children: a.handle }) }),
          /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: `mailto:${l}`, className: "text-ivory/85 no-underline hover:text-clay", children: l }) }),
          /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("span", { className: "text-ivory/70", children: i }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "mt-14 pt-8 border-t border-ivory/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ e("p", { className: "text-sm text-ivory/55", children: "© Aesthetics by Morgan. All rights reserved." }),
      /* @__PURE__ */ e("p", { className: "text-sm text-ivory/55", children: "Made with intention." })
    ] })
  ] }) });
}
function q({
  eyebrow: t,
  roman: n,
  italic: a,
  body: l,
  image: i,
  primaryCtaLabel: s,
  primaryCtaHref: c = "#contact",
  secondaryCtaLabel: m,
  secondaryCtaHref: d = "#services",
  minHeight: o = "100svh",
  className: u = ""
}) {
  return /* @__PURE__ */ r(
    "section",
    {
      className: ["relative flex items-center overflow-hidden", u].filter(Boolean).join(" "),
      style: { minHeight: o },
      children: [
        i ? /* @__PURE__ */ e(
          "img",
          {
            src: i.src,
            alt: i.alt ?? "",
            "aria-hidden": i.alt ? void 0 : !0,
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ) : /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-greige via-linen to-blush", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-espresso/45", "aria-hidden": "true" }),
        /* @__PURE__ */ r("div", { className: "relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 pt-28 pb-24", children: [
          t ? /* @__PURE__ */ e("p", { className: "abm-eyebrow text-blush mb-6", children: t }) : null,
          /* @__PURE__ */ r("h1", { className: "leading-[1.02]", children: [
            /* @__PURE__ */ e("span", { className: "block text-5xl sm:text-6xl md:text-hero font-display font-normal text-ivory", children: n }),
            a ? /* @__PURE__ */ e("span", { className: "block text-5xl sm:text-6xl md:text-hero font-display italic text-ivory/85", children: a }) : null
          ] }),
          l ? /* @__PURE__ */ e("p", { className: "mt-7 max-w-xl text-ivory/90", children: l }) : null,
          (s || m) && /* @__PURE__ */ r("div", { className: "mt-9 flex flex-wrap items-center gap-4", children: [
            s ? /* @__PURE__ */ e(h, { href: c, children: s }) : null,
            m ? /* @__PURE__ */ e(
              h,
              {
                variant: "secondary",
                href: d,
                className: "!border-ivory !text-ivory hover:!bg-ivory hover:!text-espresso",
                children: m
              }
            ) : null
          ] })
        ] })
      ]
    }
  );
}
const k = {
  "4/5": "aspect-[4/5]",
  "9/16": "aspect-[9/16]",
  "1/1": "aspect-square"
};
function I({
  images: t,
  aspect: n = "4/5",
  speedSeconds: a = 45,
  className: l = ""
}) {
  const s = `w-44 sm:w-52 flex-none ${k[n]} rounded-card overflow-hidden border border-greige/70 relative`;
  return /* @__PURE__ */ e(
    "div",
    {
      className: ["abm-marquee", l].filter(Boolean).join(" "),
      tabIndex: 0,
      role: "region",
      "aria-label": "Portfolio of recent client content, scrolling",
      children: /* @__PURE__ */ r("div", { className: "abm-marquee-track py-1", style: { animationDuration: `${a}s` }, children: [
        t.map((c, m) => /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("img", { src: c.src, alt: c.alt, className: "h-full w-full object-cover" }) }, `a-${m}`)),
        t.map((c, m) => /* @__PURE__ */ e("div", { "aria-hidden": "true", className: s, children: /* @__PURE__ */ e("img", { src: c.src, alt: "", className: "h-full w-full object-cover" }) }, `b-${m}`))
      ] })
    }
  );
}
export {
  y as Accordion,
  g as AccordionItem,
  h as Button,
  E as CTABand,
  v as Card,
  S as Eyebrow,
  F as Footer,
  q as Hero,
  x as Logo,
  $ as NavBar,
  I as PortfolioMarquee,
  N as SectionHeading,
  P as ServiceCard,
  A as Tag,
  T as TestimonialCard,
  C as ThemeProvider
};
